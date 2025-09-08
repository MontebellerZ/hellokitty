import * as MediaLibrary from "expo-media-library";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface MediaContextType {
  mediaPermission?: boolean;
  setMediaPermission: (permission?: boolean) => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

interface MediaProviderProps {
  children: ReactNode;
}

export const MediaProvider: React.FC<MediaProviderProps> = ({ children }) => {
  const [mediaPermission, setMediaPermission] = useState<boolean>();

  const value = { mediaPermission, setMediaPermission };

  useEffect(() => {
    if (mediaPermission) return;

    MediaLibrary.getPermissionsAsync().then((permission) => {
      if (permission.granted) {
        setMediaPermission(true);
        return;
      }

      MediaLibrary.requestPermissionsAsync().then((permission) => {
        setMediaPermission(permission.granted);
      });
    });
  }, [mediaPermission]);

  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>;
};

export const useMedia = (): MediaContextType => {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error("useMedia deve ser usado de dentro de MediaProvider");
  }
  return context;
};
