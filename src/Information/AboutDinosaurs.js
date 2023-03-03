import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function AboutDinosaurs(){

return(
    <div className="container" style={{margin:"110px 0px 0px 63px"}}>
        <div style={{color:"white"}}>--------------------------------------------------------------------------------------------------------------------------------------------------------</div>
         <Card style={{backgroundColor:"black"}}>
      <CardActionArea>
      <Typography gutterBottom variant="h2" component="div" style={{fontFamily:"Comic Sans MS", background:"black",color:"white",marginBottom:"0",paddingBottom:"25px",marginTop:"25px"}}>
          What are dinosaurs?
          </Typography>
          <div style={{color:"white"}}>--------------------------------------------------------------------------------------------------------------------------------------------------------</div>
        <CardMedia
          component="img"
          image="/images/what.jpg"
          alt="green iguana"
          style={{width:"75%",margin:"auto"}}
        />
        <CardContent className="col-lg-9" style={{margin:"auto",backgroundColor:"white"}} >
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
          Dinosaurs are a group of reptiles that dominated the land for over 140 million years (more than 160 million years in some parts of the world). They evolved diverse shapes and sizes, from the fearsome giant Spinosaurus to the chicken-sized Microraptor, and were able to survive in a variety of ecosystems.
          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
          One of the reasons for dinosaurs' success is that they had straight back legs, perpendicular to their bodies. This allowed them to use less energy to move than other reptiles that had a sprawling stance like today's lizards and crocodiles.
          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
          With their legs positioned under their bodies rather than sticking out to the side, dinosaurs' weight was also better supported.
          </Typography><br/>
          <img src='/images/upright.jpg' alt="leg"/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
          Dinosaurs had an upright stance (shown on the left), while lizards and crocodiles have a sprawling stance (shown on the right). Adapted from an image by Fred the Oyster, via Wikimedia Commons, licensed under CC BY-SA 4.0.          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
          Many dinosaur species became extinct around 66 million years ago, but a group of living dinosaurs are still with us today: birds.
          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
          Dinosaurs are archosaurs, a larger group of reptiles that first appeared about 251 million years ago, near the start of the Triassic Period.       </Typography><br/><br/><br/>
          <Typography gutterBottom variant="h4" component="div" style={{fontFamily:"Comic Sans MS"}}>
          Other prehistoric reptiles
          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
          Some other non-dinosaur reptiles are also archosaurs, including pterosaurs (the now-extinct flying reptiles) and modern crocodiles and their ancestors.
       </Typography><br/>
       <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
       Some other non-dinosaur reptiles are also archosaurs, including pterosaurs (the now-extinct flying reptiles) and modern crocodiles and their ancestors.
</Typography><br/>          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
These and many other types of ancient reptiles are often wrongly called dinosaurs.
       </Typography><br/>
       <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
       Marine reptiles, such as ichthyosaurs, plesiosaurs and mosasaurs are not dinosaurs. Nor is Dimetrodon or other reptiles in the same group (previously called 'mammal-like reptiles' and now called synapsids).
</Typography><br/>
       <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
       None of these other extinct groups shared the characteristic upright stance of dinosaurs.
    </Typography><br/>
    <img src='/images/dimet.jpg' alt='dimet'/>
    <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
    Despite its prehistoric appearance, Dimetrodon was not a dinosaur. It was a different kind of extinct reptile and lived even longer ago than dinosaurs.
    </Typography><br/><br/><br/>
    <Typography gutterBottom variant="h4" component="div" style={{fontFamily:"Comic Sans MS"}}>
    Main characteristics dinosaurs share:
          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
            * They had an upright stance, with legs perpendicular to their body. This is the main feature that sets dinosaurs apart from other reptiles.       </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
            * Like other reptiles, they laid eggs.</Typography><br/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
            * With the exception of some birds, for example penguins, dinosaurs lived on land, not in the sea.</Typography><br/>
          <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
            * Their skull had a hole between the eye socket and nostril. This feature is shared by all archosaurs.
      </Typography><br/>
      <Typography variant="body1" style={{textAlign:"left",fontFamily:"Comic Sans MS",fontSize:"20px"}} color="text.secondary">
        * Dinosaurs also had two holes behind the eye socket. Large, strong jaw muscles went through the holes to attach directly to the top of the skull. As a result, the jaws were able to open wide and clamp down with more force.
      </Typography><br/><br/>
      <Typography style={{fontFamily:"Comic Sans MS",fontSize:"16px"}}>By Sam Rae and Lisa Hendry
</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
)

} 

export default AboutDinosaurs;