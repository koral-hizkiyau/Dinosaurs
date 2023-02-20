import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import {Link} from "react-router-dom";

export default function Nav() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const onClickText = () => {
    console.log("clicl");
  }

  const list = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h2 className='text-center py-3'>Filter</h2>
        <Divider />
        <h4 className='text-center py-3'>Sizes Of Dinosuar</h4>
        {['All','Small', 'Medium','Large'].map((text, index) => (
            
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <CircleRoundedIcon /> : <CircleRoundedIcon />}
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
        {['All','Carnivore', 'Herbivore'].map((text, index) => (
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

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)} className="btn btn-danger m-2">Menu</button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}