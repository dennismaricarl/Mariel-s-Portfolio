import { React } from 'react'
import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import LocalCoffeeShops from './components/LocalCoffeeShops';
import OffsetCoffee from './components/OffsetCoffee';
import HyggeSeries from './components/HyggeSeries';
import SiamThai from './components/SiamThai';
import MyHumbleAbode from './components/MyHumbleAbode';
import Spaces from './components/Spaces';
import LaSpots from './components/LaSpots';

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/localCoffeeShops" element={<LocalCoffeeShops />} />
        <Route path="/offsetCoffee" element={<OffsetCoffee/>} />
        <Route path="/hyggeSeries" element={<HyggeSeries/>} />
        <Route path="/siamThai" element={<SiamThai/>} />
        <Route path="/myHumbleAbode" element={<MyHumbleAbode/>} />
        <Route path="/spaces" element={<Spaces/>} />
        <Route path="/laSpots" element={<LaSpots/>} />  
      </Routes>

  );
}

export default App;
