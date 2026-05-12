"use client";

import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { fetchAbout } from "@/sanity/queries/about.query";
import { useAboutStore } from "@/store/about.store";
import { useStore } from "@/store";

/**
 * Triggers a Sanity fetch exactly once and writes the result into the
 * Zustand store.  Any component that calls this hook or reads from the
 * store will stay in sync automatically — no prop drilling needed.
 */
export function useAboutData() {
  const { status, setLoading, setData, setError } = useStore(
    // useShallow prevents a new object reference on every render,
    // which would cause React's getServerSnapshot infinite-loop warning.
    useShallow((s) => ({
      status: s.status,
      setLoading: s.setLoading,
      setData: s.setData,
      setError: s.setError,
    }))
  );

  useEffect(() => {
    // Already fetched — store acts as an in-memory cache.
    if (status !== "idle") return;

    setLoading();

    fetchAbout()
      .then((data) => {
        if (!data) throw new Error("About document not found in Sanity.");
        setData(data);
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
      });
  }, [status, setLoading, setData, setError]);

  // useShallow here too — same reason: stable reference, no infinite loop.
  return useStore(
    useShallow((s) => ({
      data: s.userData,
      status: s.status,
      error: s.error,
    }))
  );
}
