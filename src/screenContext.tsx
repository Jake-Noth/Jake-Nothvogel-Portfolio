import React, { createContext, useState, ReactNode } from 'react';

interface ScreensContextProps {
  screens: HTMLCanvasElement[] | null;
  setScreens: React.Dispatch<React.SetStateAction<HTMLCanvasElement[] | null>>
  addScreen: (screen: HTMLCanvasElement) => void
}

const ScreensContext = createContext<ScreensContextProps | null>(null);

interface ScreensProviderProps {
  children: ReactNode;
}

export const ScreensProvider: React.FC<ScreensProviderProps> = ({ children }) => {
  const [screens, setScreens] = useState<HTMLCanvasElement[] | null>(null);

  const addScreen = (screen:HTMLCanvasElement) =>{

    if(screens){
      const newScreenArray = [...screens]
      newScreenArray.push(screen)
      setScreens(newScreenArray)
    }else{
      const newScreenArray = [screen]
      setScreens(newScreenArray)
    }
   
  }

  return (
    <ScreensContext.Provider value={{ screens, setScreens, addScreen }}>
      {children}
    </ScreensContext.Provider>
  );
};

export default ScreensContext;
