import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container} from '@material-ui/core';

const classes = makeStyles({
heroImage: {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('photographer.jpg')",
  height: '50%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundColor: 'red',
  position: 'relative',
},

heroText: {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'red',
} 
});

const HeroHeader = props => {
  return (
    <Grid container>
        <img  src='https://source.unsplash.com/random' alt='{post.imageText}' />

    </Grid>
  );
};

export default HeroHeader;
