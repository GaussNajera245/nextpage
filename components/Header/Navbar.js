import React from 'react';
import {Toolbar, Button, IconButton, Link, Typography} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchTwoTone';

const Navbar = props => {
    return (
      <>
        <Toolbar style={{borderBottom: '1px solid #e6e6e6'}}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            style={{flex: 1}}
          >
            {props.title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" style={{justifyContent: 'space-between', overflowX: 'auto',}} >
          {props.sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              style={{ padding: '8px', flexShrink: 0}}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </>
    );
};

export default Navbar;
