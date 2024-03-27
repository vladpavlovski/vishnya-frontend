'use client';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { ShortProject } from '@/app/utils/model';
export const CatalogWidgetContext = React.createContext<
  | {
      projectData: ShortProject[];
      setProjectData: Dispatch<SetStateAction<ShortProject[]>>;
    }
  | undefined
>(undefined);

export const useCatalogWidgetContext = () => {
  let context:
    | {
        projectData: ShortProject[];
        setProjectData: React.Dispatch<React.SetStateAction<ShortProject[]>>;
      }
    | undefined;
  context = useContext(CatalogWidgetContext);
  return context;
};

export const CatalogWidgetContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projectData, setProjectData] = useState<ShortProject[]>([]);
  return (
    <CatalogWidgetContext.Provider
      value={{
        projectData,
        setProjectData,
      }}
    >
      {children}
    </CatalogWidgetContext.Provider>
  );
};
