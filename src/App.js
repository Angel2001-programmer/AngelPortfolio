import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesNav from './RoutesNav';
import { Fragment } from 'react';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <RoutesNav />
        </BrowserRouter>
      </div>
      <p className='text-gray-800 bg-[#87c4ff] pb-2 text-center'>
        All rights reserved Angel Witchell
      </p>
    </>
  );
}

export default App;
