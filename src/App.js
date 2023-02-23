import './App.css';
import DinoApp from "./Dinosuars_Comps/dinoApp";
import {BrowserRouter as Router, Route ,Routes ,useLocation   } from "react-router-dom";
import SizeOfDino from './Dinosuars_Comps/sizeOfDino';
import Nav from './Nav';
import DietOfDino from './Dinosuars_Comps/dietOfDino';
import AboutDinosaurs from './Information/AboutDinosaurs';


function App(props) {


  return (
    <Router>
    <div className="App" style={{backgroundColor:"#000000"}}>
      <div className="container">
      <div className="row py-3">
       <Nav/>
      </div></div> 
      <Routes >
        <Route path="/" element={<DinoApp/>}/>
        <Route path="/DinoSize" element={<SizeOfDino/>}/>
        <Route path="/DinoDiet" element={<DietOfDino/>}/>
        <Route path="/AboutDinosaurs" element={<AboutDinosaurs/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
