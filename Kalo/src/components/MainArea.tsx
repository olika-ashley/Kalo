import {Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreateBets from '../pages/CreateBets';
import TournamentMode from '../pages/TournamentMode';
import Docs from '../pages/Docs';
//import Bets from '../pages/Bets';



export default function MainArea() {
    return (
      <div className="flex w-3/4">
        {/* Main area */}
        <div className="bg-[#1A202C] w-3/4 h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateBet" element={<CreateBets />} />
            <Route path="/Tourney Mode" element={<TournamentMode />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </div> 
        
        {/* Bets area can we change to connect wallet? i think it's what we should do*/}
        <div className="bg-[#1A202C] w-1/4 h-screen">
          
        </div>
      </div>
    );
}