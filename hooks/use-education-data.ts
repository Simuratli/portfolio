"use client";

import { useStore } from '@/store';
import React, { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow';
import { fetchEducation } from '@/sanity/queries/education.query';

const useEducationData = () => {
     const { educationStatus, setEducationLoading, setEducationData, setEducationError  } = useStore(
        // useShallow prevents a new object reference on every render,
        // which would cause React's getServerSnapshot infinite-loop warning.
        useShallow((s) => ({
          educationStatus: s.educationStatus,
          setEducationLoading: s.setEducationLoading,
          setEducationData: s.setEducationData,
          setEducationError: s.setEducationError,
        }))
      );

    useEffect(()=>{
        if(educationStatus !== "idle") return;  

        setEducationLoading();

        fetchEducation()
        .then((data) => {
            if (!data) throw new Error("Education document not found in Sanity.");
            setEducationData(data);
          })
          .catch((err: unknown) => {
            const message = err instanceof Error ? err.message : "Unknown error";
            setEducationError(message);
          });
    },[])
  return useStore(
    useShallow((s) => ({
      educationData: s.educationData,
      educationStatus: s.educationStatus,
      educationError: s.educationError,
    }))
  );
}

export default useEducationData
