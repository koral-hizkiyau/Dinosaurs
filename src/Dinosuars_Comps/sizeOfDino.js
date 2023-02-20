import React, {useEffect, useState} from "react"
import DinoItem from "./dinoItem"
import { dinosArr } from '../Service/dinosaurs_data';
import { useLocation } from "react-router-dom";

function SizeOfDino(props){
    let [dinoArr , setDinoArr] = useState(dinosArr);
    const location = useLocation();
    let sizesOfDino = location.state;
    
    useEffect(()=> {
        if(sizesOfDino !== 'All'){
       let newDinoArr = dinosArr.filter(dinoArr => dinoArr.size == sizesOfDino)
       setDinoArr(newDinoArr);
        }
        else{
            setDinoArr(dinosArr);
        }
    },[sizesOfDino])

    
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

export default SizeOfDino