import * as ScreenOrientation from "expo-screen-orientation";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type OrientationType = "portrait" | "landscape";

interface OrientationContextType {
  orientation: OrientationType;
}

const OrientationContext = createContext<OrientationContextType | undefined>(undefined);

interface OrientationProviderProps {
  children: ReactNode;
}

export const OrientationProvider: React.FC<OrientationProviderProps> = ({ children }) => {
  const [orientation, setOrientation] = useState<OrientationType>("portrait");

  const value = { orientation };

  useEffect(() => {
    function defineOrientation(orientation: ScreenOrientation.Orientation) {
      if (
        orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
        orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
      ) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    }

    ScreenOrientation.getOrientationAsync().then(defineOrientation);

    const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
      const { orientation } = event.orientationInfo;
      defineOrientation(orientation);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  return <OrientationContext.Provider value={value}>{children}</OrientationContext.Provider>;
};

export const useOrientation = (): OrientationContextType => {
  const context = useContext(OrientationContext);
  if (context === undefined) {
    throw new Error("useOrientation deve ser usado de dentro de OrientationProvider");
  }
  return context;
};
