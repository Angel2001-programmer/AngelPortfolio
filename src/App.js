import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesNav from './RoutesNav';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <RoutesNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
