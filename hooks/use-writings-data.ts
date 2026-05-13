import { fetchWritings } from "@/sanity/queries/writings.query";
import { useStore } from "@/store";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

const useWritingsData = () => {
  const { writingStatus, setWritingLoading, setWritingData, setWritingError } =
    useStore(
      useShallow((s) => ({
        writingStatus: s.writingStatus,
        setWritingLoading: s.setWritingLoading,
        setWritingData: s.setWritingData,
        setWritingError: s.setWritingError,
      })),
    );

  useEffect(() => {
    if (writingStatus !== "idle") return;
    setWritingLoading();
    fetchWritings()
      .then((data) => {
        if (!data) throw new Error("Writing documents not found in Sanity.");
        setWritingData(data);
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "Unknown error";
        setWritingError(message);
      });
  }, []);

  return useStore(
    useShallow((s) => ({
      writingData: s.writingData,
      writingStatus: s.writingStatus,
      writingError: s.writingError,
    })),
  );
};

export default useWritingsData;
