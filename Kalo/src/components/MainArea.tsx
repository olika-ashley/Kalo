import {Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Sports from '../pages/Sports';
import Esports from '../pages/Esports';
import Docs from '../pages/Docs';
import Bets from '../pages/Bets';



export default function MainArea() {
    return (
      <div className="flex w-3/4">
        {/* Main area */}
        <div className="bg-[#1A202C] w-3/4 h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/esports" element={<Esports />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </div> 
        
        {/* Bets area */}
        <div className="bg-[#1A202C] w-1/4 h-screen">
          <Bets />
        </div>
      </div>
    );
  }