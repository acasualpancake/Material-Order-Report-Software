import { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState(null); // default empty

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => useContext(ViewContext);