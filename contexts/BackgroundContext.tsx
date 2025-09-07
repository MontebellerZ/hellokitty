import { BACKGROUNDS, loadBackground, saveBackground } from "@/utils/backgrounds";
import { ImageDetails } from "@/utils/imageDetails";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface BackgroundContextType {
  back: ImageDetails;
  setBack: (background: ImageDetails) => void;
  backgrounds: ImageDetails[];
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

interface BackgroundProviderProps {
  children: ReactNode;
}

export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({ children }) => {
  const [back, setBack] = useState(BACKGROUNDS[0]);

  const fullSetBack = (back: ImageDetails) => {
    setBack(back);
    saveBackground(back);
  };

  const value = { back, setBack: fullSetBack, backgrounds: BACKGROUNDS };

  useEffect(() => {
    loadBackground().then(fullSetBack);
  }, []);

  return <BackgroundContext.Provider value={value}>{children}</BackgroundContext.Provider>;
};

export const useBackground = (): BackgroundContextType => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error("useBackground deve ser usado de dentro de BackgroundProvider");
  }
  return context;
};
