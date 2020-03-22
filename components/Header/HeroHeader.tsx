import React from "react";
import {Grid} from '@material-ui/core';

const HeroHeader = props => {
  return (
    <Grid container style={{ maxHeight:'600px', overflow:'hidden'}}>
        <img style={{width:'100%'}} src='https://i.picsum.photos/id/446/1095/400.jpg' alt='{post.imageText}' />
    </Grid>
  );
};

export default HeroHeader;
