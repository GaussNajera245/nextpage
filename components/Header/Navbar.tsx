import React, {useState} from 'react';
import { useRouter } from 'next/router'
import {ListItem, Divider, Hidden, Button, IconButton, Link, Typography, Grid, Drawer, GridListTile, GridListTileBar } from '@material-ui/core';
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

const linkStyle2:object = {
  fontSize: '1rem',
  color: 'black',
}


const Navbar: React.FC<NavbarProps> = props => {
  const [toggle, setToggleStatus] = useState<boolean>(false);
  const router = useRouter();

  const openDrawer = ()=>{
    setToggleStatus(!toggle);
    console.log();
  };

  const goToMain = () => router.push('/') ;


  return (
      <>
        <Grid container  direction="row" justify="space-between" alignItems="center" style={{ height:'65px' }}>

        <Hidden smUp implementation="css">
          <Drawer open={toggle} onClose={openDrawer} >
                <img src="/static/otto.png/" alt="logo" height="50px" />
              {props.sections.map(section => (
                <React.Fragment key={section.title}>
                  <ListItem >
                    <Link 
                      style={ linkStyle2 }
                      href={section.url}
                    >
                      {section.title}
                    </Link>
                  </ListItem>
                </React.Fragment>
              ))}
          </Drawer>
        </Hidden>
          
          <Grid item xs={12} sm={2}>  
            <Grid container>
              <Grid item xs={1}>
                <Hidden smUp >
                  <IconButton onClick={openDrawer}>
                    <MenuIcon />
                  </IconButton>
                </Hidden>
              </Grid>
              <Grid item xs={11}>
                <img src="/static/otto.png/" alt="logo" height="62px" style={{marginLeft: '20px'}} onClick={goToMain}/>
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
        <Divider style={{border: '1px solid white'}}/>
      </>
    );
  };
  
  export default Navbar;
