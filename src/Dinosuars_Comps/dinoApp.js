import React, {useState} from "react"
import DinoItem from "./dinoItem"
import { dinosArr } from '../Service/dinosaurs_data';

function DinoApp(props){
    let [dinoArr , setDinoArr] = useState(dinosArr);


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

export default DinoApp