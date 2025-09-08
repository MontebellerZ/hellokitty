import React, { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
  content: ReactNode[];
  setContent: (content?: ReactNode) => void;
  resetContent: (content?: ReactNode) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [contentList, setContentList] = useState<ReactNode[]>([]);

  const changeContent = (content?: ReactNode) => {
    setContentList((contentList) =>
      content ? [...contentList, content] : contentList.slice(0, -1)
    );
  };

  const changeResetContent = (content?: ReactNode) => {
    setContentList(content ? [content] : []);
  };

  const value = {
    content: contentList,
    setContent: changeContent,
    resetContent: changeResetContent,
    close: () => changeContent(undefined),
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal deve ser usado de dentro de ModalProvider");
  }
  return context;
};
