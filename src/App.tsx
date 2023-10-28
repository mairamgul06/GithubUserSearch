import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Favourite from './pages/Favourite';
import Navigation from './component/Navigation';
function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='favourite' element={<Favourite/>}/>
      </Routes>
    </>
  );
}

export default App;
