import { React } from 'react'
import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import LocalCoffeeShops from './components/LocalCoffeeShops';


function App() {

  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/localCoffeeShops" element={<LocalCoffeeShops />} />
    </Routes>

  );
}

export default App;
