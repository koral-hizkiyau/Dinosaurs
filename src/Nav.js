import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import "./CSS/nav.css";


export default function Nav() {
  const [state, setState] = React.useState({
    left: false,
    right:false
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  

  const listLeft = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h2 className='text-center py-3'>Menu</h2>
        <ListItem>
             <ListItemButton>
              <ListItemIcon>
              <img src="/images/icons/rex.png" alt="rexIcon"/>              </ListItemIcon>
             <Link to="/" 
              className='btn'><ListItemText primary="All Dinosaurs" /></Link> 
            </ListItemButton></ListItem>
        <Divider />
        <h4 className='text-center py-3'>Sizes Of Dinosuar</h4>
        {['Small', 'Medium','Large'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={'/images/icons/'+text+'.png'} alt={text+'Icon'}/>
              </ListItemIcon>
             <Link to="/DinoSize" state={text}
              className='btn'><ListItemText primary={text} /></Link> 
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h4 className='text-center py-3'>Diets Of Dinosuar</h4>
        {['Carnivore', 'Herbivore'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <img src="/images/icons/meat.png" alt="meatIcon"/>  : <img src="/images/icons/vegan.png" alt="veganIcon"/> }
              </ListItemIcon>
              <Link to="/DinoDiet" state={text}
              className='btn'><ListItemText primary={text} /></Link> 
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const listRight = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h2 className='text-center py-3'>Information</h2>
        <ListItem>
             <ListItemButton>

             <Link to="/AboutDinosaurs" 
              className='btn'><ListItemText primary="What are dinosaurs?" /></Link> 
            </ListItemButton></ListItem>
        <Divider />
        {/* <h4 className='text-center py-3'>About Dinosaurs</h4>
        {['Small', 'Medium','Large'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={'/images/icons/'+text+'.png'} alt={text+'Icon'}/>
              </ListItemIcon>
             <Link to="/DinoSize" state={text}
              className='btn'><ListItemText primary={text} /></Link> 
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h4 className='text-center py-3'>Diets Of Dinosuar</h4>
        {['Carnivore', 'Herbivore'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <img src="/images/icons/meat.png" alt="meatIcon"/>  : <img src="/images/icons/vegan.png" alt="veganIcon"/> }
              </ListItemIcon>
              <Link to="/DinoDiet" state={text}
              className='btn'><ListItemText primary={text} /></Link> 
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  return (
    <div className='row'>
      <div className='col-lg-6' style={{display:'flex',justifyContent:'left'}}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)} className="btn btn-danger" ><MenuIcon/></button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {listLeft(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      </div>
      <div className='col-lg-6' style={{display:'flex',justifyContent:'right'}}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)} className="btn btn-danger" ><MenuIcon/></button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {listRight(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      </div>
    </div>
  );
}