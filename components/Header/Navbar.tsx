import React, { useState } from 'react';
import { Divider, Hidden, IconButton, Link, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import NavDrawer from './NavDrawer';
import { NavbarProps } from '../../models/types.models'; 
import { Logo } from '../Text';

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
  const [toggle, setToggleStatus] = useState<boolean>(false);

  const openDrawer = () => setToggleStatus(!toggle);

  return (
      <>
        <Grid container  direction="row" justify="space-between" alignItems="center" style={{ height:'65px' }}>
          <Hidden smUp implementation="css">
            <NavDrawer open={toggle} onClosed={openDrawer} sections={props.sections} />
          </Hidden>

          
          <Grid item xs={12} sm={5}>  
            <Grid container direction="row" alignItems="center">
              <Grid item xs={1}>
                <Hidden smUp >
                  <IconButton onClick={openDrawer} style={{marginRight:10}}>
                    <MenuIcon style={{fill:'white'}} />
                  </IconButton>
                </Hidden>
              </Grid>
              <Grid item xs={11}>
                 <Logo text='-Logo-' dark/>   
              </Grid>
            </Grid>
          </Grid>

          <Hidden only="xs">
            <Grid item sm={7}>
              <Grid container direction="row" justify="flex-end" >
                <Grid item>
                    {props.sections.map(section => (
                      <Link key={section.title} variant="body2" href={section.url} style={linkStyle} >
                        {section.title}
                      </Link>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Divider style={{height: '1px', color: 'white',  backgroundColor: 'white',  border: 'none'}}/>
      </>
    );
  };
  
  export default Navbar;
