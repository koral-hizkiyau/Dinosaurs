import React, {useEffect, useState} from "react"
import DinoItem from "./dinoItem"
import { dinosArr } from '../Service/dinosaurs_data';
import { useLocation } from "react-router-dom";

function DietOfDino(props){
    let [dinoArr , setDinoArr] = useState(dinosArr);
    const location = useLocation();
    let dietOfDino = location.state;
    
    useEffect(()=> {
       let newDinoArr = dinosArr.filter(dinoArr => dinoArr.diet == dietOfDino)
       setDinoArr(newDinoArr);
    },[dietOfDino])

    
    return(
        <div className="continer-fluid p-4">  
                   
        <div className="row">
            
            {  dinoArr.map(item => {
                return(                       
              <DinoItem key={item.productId} item={item} />         
            )
            }
            )}
        </div>
        </div>
    )

}

export default DietOfDino