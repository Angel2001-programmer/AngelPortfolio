import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, createContext } from 'react';
import RoutesNav from './RoutesNav';
export const AppContext = createContext();

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className='App'>
      <BrowserRouter>
        <AppContext.Provider value={[clicked, setClicked]}>
          <RoutesNav />
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
