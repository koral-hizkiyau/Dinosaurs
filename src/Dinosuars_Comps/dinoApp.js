import React, {useState} from "react"
import DinoItem from "./dinoItem"
import { dinosArr } from '../Service/dinosaurs_data';
import "../App.css";

function DinoApp(props){
    let [dinoArr , setDinoArr] = useState(dinosArr);


    return(
        <>
        <div className="continer-fluid p-4"> 
        <h1 className="titleApp" style={{marginBottom:"2%"}}>Dinosaurs</h1>
 
        <div className="row">
            
            {  dinoArr.map(item => {
                return(                       
              <DinoItem key={item.productId} item={item}/>         
            )
            }
            )}
        </div>
        </div>
        </>
    )

}

export default DinoApp