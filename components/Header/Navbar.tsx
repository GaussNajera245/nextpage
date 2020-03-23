import React, {useState} from 'react';
import {Toolbar, Hidden, Button, IconButton, Link, Typography, Grid, Drawer, GridListTile, GridListTileBar } from '@material-ui/core';
import { NavbarProps } from '../../models/types.models'; 
// import { Menu } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'

const linkStyle:object = {
  fontSize: '1.2rem',
  color: 'white',
  paddingRight: '28px',
  paddingLeft: '8px',
  paddingTop: '8px',
  paddingBottom: '8px',
  flexShrink: 0
}


const Navbar: React.FC<NavbarProps> = props => {
  const [toggle, setToggleStatus] = useState<boolean>(false)

  const openDrawer = ()=>{
    setToggleStatus(!toggle);
    console.log();
  };

  // const Options:React.FC<NavbarProps> = props => {
  //   return(
  //     {props.sections.map(section => (
  //       <Link
  //       color="inherit"
  //       noWrap
  //       key={section.title}
  //       variant="body2"
  //       href={section.url}
  //       style={linkStyle}
  //       >
  //         {section.title}
  //       </Link>
  //     ))}
  //   );
  // }



  return (
      <>
        <Grid container  direction="row" justify="space-between" alignItems="center" style={{ height:'65px' }}>

        <Hidden smUp implementation="css">
          <Drawer
            open={toggle}
            onClose={openDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
              {props.sections.map(section => (
                <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                style={linkStyle}
                >
                  {section.title}
                </Link>
              ))}
    
          </Drawer>
        </Hidden>
          
          <Grid item xs={12} sm={2}>  
            <Grid container>
              <Grid item xs={1} spacing={2}>
                <Hidden smUp >
                  <IconButton onClick={openDrawer}>
                    <MenuIcon />
                  </IconButton>
                </Hidden>
              </Grid>
              <Grid item xs={11}>
                <p >LOGO</p>
              </Grid>
            </Grid>
          </Grid>


          <Hidden only="xs">
            <Grid item >
              {props.sections.map(section => (
                <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                style={linkStyle}
                >
                  {section.title}
                </Link>
              ))}
            </Grid>
          </Hidden>
        </Grid>

      </>
    );
  };
  
  export default Navbar;
  
  {/* 
          <Toolbar style={{borderBottom: '1px solid #e6e6e6', display:'none'}}>
            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap  style={{flex: 1}}>
              {props.title}
            </Typography>
            {props.sections.map(section => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                style={{ padding: '8px', flexShrink: 0 }}
              >
                {section.title}
              </Link>
            ))}
          </Toolbar> */}