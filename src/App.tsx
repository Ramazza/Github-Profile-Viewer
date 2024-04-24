import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Repos from './pages/repos';
import Follower from './pages/followers';
import Following from './pages/following';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile />} />		
        <Route path='/repos' element={<Repos />} />		
        <Route path='/followers' element={<Follower />} />		
        <Route path='/following' element={<Following />} />		
      </Routes>
		</BrowserRouter>
  );
}

export default App;
