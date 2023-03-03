import './App.css';
import DinoApp from "./Dinosuars_Comps/dinoApp";
import {BrowserRouter as Router, Route ,Routes   } from "react-router-dom";
import SizeOfDino from './Dinosuars_Comps/sizeOfDino';
import Nav from './Nav';
import DietOfDino from './Dinosuars_Comps/dietOfDino';
import AboutDinosaurs from './Information/AboutDinosaurs';
import GamesDino from './JustForFun/gamesDino';
import DrawDino from './JustForFun/drawDino';
import { useEffect, useState } from 'react';


function App() {
  let [showButton , setShowButton] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        setShowButton(true);
      } else{
        setShowButton(false);
      }
    });
  }, []);

  const handleScrollToTop = () =>{
    window.scrollTo({top:0, behavior:'smooth'});
  }
  return (
    <Router>
    <div className="App" style={{backgroundColor:"#000000"}}>
    {showButton && (
            <div className={`scrollToTo`}>
                <img src="/images/icons/up-arrow.png" alt="scrollToTop" style={{position:"fixed",bottom:"15px",right:"22px",height:"50px",width:"50px"}} onClick={handleScrollToTop}/>
            </div>
        )}

       <Nav/>
      <Routes >
        <Route path="/" element={<DinoApp/>}/>
        <Route path="/DinoSize" element={<SizeOfDino/>}/>
        <Route path="/DinoDiet" element={<DietOfDino/>}/>
        <Route path="/AboutDinosaurs" element={<AboutDinosaurs/>}/>
        <Route path='/GamesDino' element={<GamesDino/>}/>
        <Route path="/DrawDino" element={<DrawDino/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
