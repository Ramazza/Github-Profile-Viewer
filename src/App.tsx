import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Repository from './pages/repo';
import Profile from './pages/profile';
import Followers from './pages/followers';
import Following from './pages/following';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile />} />		
        <Route path='/repo' element={<Repository />} />		
        <Route path='/followers' element={<Followers />} />		
        <Route path='/following' element={<Following />} />		
      </Routes>
		</BrowserRouter>
  );
}

export default App;
