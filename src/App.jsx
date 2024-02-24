import React, { useState, useEffect } from 'react';
import PlanetCard from './components/PlanetCard';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { PlanetContextProvider } from './data/PlanetData';
function App() {


  return (
    
       <div className="main-wrapper min-h-full ">
        <PlanetContextProvider>
    <Header/>
    <Outlet />
    </PlanetContextProvider>
      </div>
  
  );
}

export default App;
