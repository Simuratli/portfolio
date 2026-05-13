import { fetchProjects } from "@/sanity/queries/projects.query";
import { useStore } from "@/store";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

const useProjectsData = () => {
  const {
    projectStatus,
    setProjectLoading,
    setProjectData,
    setProjectError,
  } = useStore(
    useShallow((s) => ({
      projectStatus: s.projectStatus,
      setProjectLoading: s.setProjectLoading,
      setProjectData: s.setProjectData,
      setProjectError: s.setProjectError,
    })),
  );

  useEffect(() => {
    if (projectStatus !== "idle") return;
    setProjectLoading();
    fetchProjects()
      .then((data) => {
        if (!data) throw new Error("Project documents not found in Sanity.");
        setProjectData(data);
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "Unknown error";
        setProjectError(message);
      });
  }, []);

  return useStore(
    useShallow((s) => ({
      projectData: s.projectData,
      projectStatus: s.projectStatus,
      projectError: s.projectError,
    })),
  );
};

export default useProjectsData;
