import { fetchExperiences } from "@/sanity/queries/experiences.query";
import { useStore } from "@/store";
import React, { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

const useExperienceData = () => {
  const {
    experienceStatus,
    setExperienceLoading,
    setExperienceData,
    setExperienceError,
  } = useStore(
    // useShallow prevents a new object reference on every render,
    // which would cause React's getServerSnapshot infinite-loop warning.
    useShallow((s) => ({
      experienceStatus: s.experienceStatus,
      setExperienceLoading: s.setExperienceLoading,
      setExperienceData: s.setExperienceData,
      setExperienceError: s.setExperienceError,
    })),
  );

  useEffect(() => {
    if (experienceStatus !== "idle") return;
    fetchExperiences()
      .then((data) => {
        if (!data) throw new Error("Experience documents not found in Sanity.");
        setExperienceData(data);
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "Unknown error";
        setExperienceError(message);
      });
  }, []);

  return useStore(
    useShallow((s) => ({
      experienceData: s.experienceData,
      experienceStatus: s.experienceStatus,
      experienceError: s.experienceError,
    })),
  );
};

export default useExperienceData;
