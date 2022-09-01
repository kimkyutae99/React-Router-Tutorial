import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profiles from './components/Profiles';
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
        <Route path='/about' element={<About />} />
        <Route path='/profiles' element={<Profiles />} />
      </Routes>
    </div>
  );
}

export default App;
