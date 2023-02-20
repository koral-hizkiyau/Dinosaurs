import './App.css';
import DinoApp from "./Dinosuars_Comps/dinoApp";
import {BrowserRouter as Router, Route ,Routes ,useLocation   } from "react-router-dom";
import SizeOfDino from './Dinosuars_Comps/sizeOfDino';
import Nav from './Nav';
import DietOfDino from './Dinosuars_Comps/dietOfDino';


function App(props) {


  return (
    <Router>
    <div className="App" style={{backgroundColor:"#000000"}}>
      <h1 className="titleApp py-3">Dinosaurs</h1>
      <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
       <Nav/>
        </div> 
      </div></div> 
      <Routes >
        <Route path="/" element={<DinoApp/>}/>
        <Route path='/DinoSize' element={<SizeOfDino/>}/>
        <Route path="/DinoDiet" element={<DietOfDino/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
