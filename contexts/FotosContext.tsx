import { Foto, getAllFotos } from "@/utils/fotos";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface FotosContextType {
  fotos: Foto[] | undefined;
  setFotos: (fotos: Foto[]) => void;
}

const FotosContext = createContext<FotosContextType | undefined>(undefined);

interface FotosProviderProps {
  children: ReactNode;
}

export const FotosProvider: React.FC<FotosProviderProps> = ({ children }) => {
  const [fotos, setFotos] = useState<Foto[]>();

  const value = { fotos, setFotos };

  useEffect(() => {
    getAllFotos().then(setFotos);
  }, []);

  return <FotosContext.Provider value={value}>{children}</FotosContext.Provider>;
};

export const useFotos = (): FotosContextType => {
  const context = useContext(FotosContext);
  if (context === undefined) {
    throw new Error("useFotos deve ser usado de dentro de FotosProvider");
  }
  return context;
};
