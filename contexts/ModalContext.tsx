import React, { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
  content: ReactNode | undefined;
  setContent: (content: ReactNode | undefined) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [content, setContent] = useState<ReactNode>();

  const value = { content, setContent, close: () => setContent(undefined) };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal deve ser usado de dentro de ModalProvider");
  }
  return context;
};
