import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
