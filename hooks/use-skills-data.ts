import { fetchSkills } from "@/sanity/queries/skills.query";
import { useStore } from "@/store";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

const useSkillsData = () => {
  const { skillStatus, setSkillLoading, setSkillData, setSkillError } =
    useStore(
      useShallow((s) => ({
        skillStatus: s.skillStatus,
        setSkillLoading: s.setSkillLoading,
        setSkillData: s.setSkillData,
        setSkillError: s.setSkillError,
      })),
    );

  useEffect(() => {
    if (skillStatus !== "idle") return;
    setSkillLoading();
    fetchSkills()
      .then((data) => {
        if (!data) throw new Error("Skill documents not found in Sanity.");
        setSkillData(data);
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "Unknown error";
        setSkillError(message);
      });
  }, []);

  return useStore(
    useShallow((s) => ({
      skillData: s.skillData,
      skillStatus: s.skillStatus,
      skillError: s.skillError,
    })),
  );
};

export default useSkillsData;
