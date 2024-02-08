import './App.css';
import { HashRouter } from 'react-router-dom';
import RoutesNav from './RoutesNav';

function App() {
  return (
    <>
      <div className='App'>
        <HashRouter basename='/'>
          <RoutesNav />
        </HashRouter>
      </div>
      <p className='text-gray-800 bg-[#87c4ff] pb-2 text-center'>
        All rights reserved Angel Witchell
      </p>
    </>
  );
}

export default App;
