// Global style imports
import './App.css';

// View imports
import MainView from "./views/MainView";

// Funcational imports
import { useView } from './contexts/ViewContext';
import { useEffect } from 'react';

// Internal constants

// Component export
export const App = () => {
  const {view, setView} = useView();

  useEffect(() => {
    setView(<MainView />);
  }, []);

  return  (<>
    {view}
  </>);
}