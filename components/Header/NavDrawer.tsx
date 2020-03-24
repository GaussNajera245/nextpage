import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import { DrawerProps } from '../../models/types.models';
import { ListItem, Divider, List, Drawer, ListItemText } from '@material-ui/core';
import { Logo } from '../Text';
  
const NavDrawer: React.FC<DrawerProps> = props =>{
    const router = useRouter();
    const goTo: (url:string) => void = url => router.push(url);
    const some:object = {
      fontFamily: "'Caveat', cursive",
      color:"black",
      fontSize: '2.7rem',
      marginTop: 0,
      marginBottom: 0,
    };

    return(
        <Drawer open={props.open} onClose={props.onClosed} >
          <br></br>
          <Logo text='-Logo-'/>
          <Divider></Divider>
          <List>
          {props.sections.map(sec => (
            <Fragment key={sec.title+'1'}>
              <ListItem button onClick={() => goTo(sec.url)}> 
                <ListItemText primary={sec.title} />
              </ListItem>
              <Divider></Divider>
            </Fragment>
          ))}
          </List>
        </Drawer>
    );
} 

export default NavDrawer;