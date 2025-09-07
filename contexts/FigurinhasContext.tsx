import { Figurinha, loadFigurinhas, saveFigurinhas } from "@/utils/figurinhas";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface FigurinhasContextType {
  figurinhas: Figurinha[] | undefined;
  setFigurinhas: (figurinhas: Figurinha[]) => void;
}

const FigurinhasContext = createContext<FigurinhasContextType | undefined>(undefined);

interface FigurinhasProviderProps {
  children: ReactNode;
}

export const FigurinhasProvider: React.FC<FigurinhasProviderProps> = ({ children }) => {
  const [figurinhas, setFigurinhas] = useState<Figurinha[]>();

  const fullSetFigurinhas = async (figurinhas: Figurinha[]) => {
    const newFigurinhas = saveFigurinhas(figurinhas);
    setFigurinhas(newFigurinhas);
  };

  const value = { figurinhas, setFigurinhas: fullSetFigurinhas };

  useEffect(() => {
    loadFigurinhas().then(setFigurinhas);
  }, []);

  return <FigurinhasContext.Provider value={value}>{children}</FigurinhasContext.Provider>;
};

export const useFigurinhas = (): FigurinhasContextType => {
  const context = useContext(FigurinhasContext);
  if (context === undefined) {
    throw new Error("useFigurinhas deve ser usado de dentro de FigurinhasProvider");
  }
  return context;
};
