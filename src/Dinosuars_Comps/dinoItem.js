import React, { useEffect, useState } from 'react'
import { dinosArr } from '../Service/dinosaurs_data';
function DinoItem(props) {
   

 let {productName,productId,latinName,manufacturer,era,dna,imageName1,diet,size,length,height,weight,difficulty,price,description} = props.item;

        return (
            <>
                
                  
                   
                            <div className="col-lg-6 border" style={{color:"white"}}>
                            <h2 className='text-center py-3' style={{fontFamily:'African'}}>{productName}</h2>
                            <div className="row" id={productId}>                           
                             <div className='col-lg-6' style={{textAlign:"left",paddingLeft:"6%",fontFamily:'cursive', fontSize:"18px"}}>
                                <p><b> Latin name: </b>{latinName}</p>
                                <p><b> Manufacturer: </b>{manufacturer}</p>
                                <p><b> Era: </b>{era}</p>
                                <p><b> Dna: </b>{dna}</p>
                                <p><b> Diet: </b>{diet}</p>
                                <p><b> Size: </b>{size}</p>
                                <p><b> Length: </b>{length}</p> 
                                <p><b> Height: </b>{height}</p>
                                <p><b> Weight: </b>{weight}</p>
                                <p><b> Difficulty: </b>{difficulty}</p>
                                <p><b> Price: </b>{price}</p>                          
                               </div>
                               <div className="col-lg-6" style={{paddingTop:"130px",marginLeft:"-16%"}}>
            <img src={imageName1} id="dinoImg" width="410px" alt={productName}/></div>
                               <div style={{textAlign:"left",paddingLeft:"4%",fontFamily:'cursive',fontSize:"18px"}}><b>Description: </b>{description}</div>
            
                            </div></div>
                       

               
                
                
                
                   
                
            </>
        )
    
}

export default DinoItem