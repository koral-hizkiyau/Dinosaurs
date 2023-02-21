import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function AboutDinosaurs(){

return(
    <div className="container" style={{marginTop:"25px"}}>
         <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image="/images/what.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
          What are dinosaurs?
          </Typography>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
          Dinosaurs are a group of reptiles that dominated the land for over 140 million years (more than 160 million years in some parts of the world). They evolved diverse shapes and sizes, from the fearsome giant Spinosaurus to the chicken-sized Microraptor, and were able to survive in a variety of ecosystems.
          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
          One of the reasons for dinosaurs' success is that they had straight back legs, perpendicular to their bodies. This allowed them to use less energy to move than other reptiles that had a sprawling stance like today's lizards and crocodiles.
          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
          With their legs positioned under their bodies rather than sticking out to the side, dinosaurs' weight was also better supported.
          </Typography><br/>
          <img src='/images/upright.jpg' alt="leg"/>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
          Dinosaurs had an upright stance (shown on the left), while lizards and crocodiles have a sprawling stance (shown on the right). Adapted from an image by Fred the Oyster, via Wikimedia Commons, licensed under CC BY-SA 4.0.          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
          Many dinosaur species became extinct around 66 million years ago, but a group of living dinosaurs are still with us today: birds.
          </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
          Dinosaurs are archosaurs, a larger group of reptiles that first appeared about 251 million years ago, near the start of the Triassic Period.       </Typography><br/>
          <Typography gutterBottom variant="h4" component="div">
          Other prehistoric reptiles
          </Typography>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
          Some other non-dinosaur reptiles are also archosaurs, including pterosaurs (the now-extinct flying reptiles) and modern crocodiles and their ancestors.
       </Typography><br/>
       <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
       Some other non-dinosaur reptiles are also archosaurs, including pterosaurs (the now-extinct flying reptiles) and modern crocodiles and their ancestors.
</Typography><br/>          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
These and many other types of ancient reptiles are often wrongly called dinosaurs.
       </Typography><br/>
       <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
       Marine reptiles, such as ichthyosaurs, plesiosaurs and mosasaurs are not dinosaurs. Nor is Dimetrodon or other reptiles in the same group (previously called 'mammal-like reptiles' and now called synapsids).
</Typography><br/>
       <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
       None of these other extinct groups shared the characteristic upright stance of dinosaurs.
    </Typography><br/>
    <img src='/images/dimet.jpg' alt='dimet'/>
    <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
    Despite its prehistoric appearance, Dimetrodon was not a dinosaur. It was a different kind of extinct reptile and lived even longer ago than dinosaurs.
    </Typography><br/>
    <Typography gutterBottom variant="h4" component="div">
    Main characteristics dinosaurs share:
          </Typography>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
            * They had an upright stance, with legs perpendicular to their body. This is the main feature that sets dinosaurs apart from other reptiles.       </Typography><br/>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
            *Like other reptiles, they laid eggs.</Typography><br/>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
            *With the exception of some birds, for example penguins, dinosaurs lived on land, not in the sea.</Typography><br/>
          <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
            *Their skull had a hole between the eye socket and nostril. This feature is shared by all archosaurs.
      </Typography><br/>
      <Typography variant="body1" style={{textAlign:"left"}} color="text.secondary">
        *Dinosaurs also had two holes behind the eye socket. Large, strong jaw muscles went through the holes to attach directly to the top of the skull. As a result, the jaws were able to open wide and clamp down with more force.
      </Typography><br/>
        </CardContent>
      </CardActionArea>
    </Card>
        {/* <h1 style={{color:"white", fontFamily:"African", fontSize:"45px"}}>What are dinosaurs?</h1>
        <div style={{color:"white"}}>Dinosaurs are a group of reptiles that dominated the land for over 140 million years (more than 160 million years in some parts of the world). They evolved diverse shapes and sizes, from the fearsome giant Spinosaurus to the chicken-sized Microraptor, and were able to survive in a variety of ecosystems.
One of the reasons for dinosaurs' success is that they had straight back legs, perpendicular to their bodies. This allowed them to use less energy to move than other reptiles that had a sprawling stance like today's lizards and crocodiles.

With their legs positioned under their bodies rather than sticking out to the side, dinosaurs' weight was also better supported</div>
         */}
    </div>
)

} 

export default AboutDinosaurs;