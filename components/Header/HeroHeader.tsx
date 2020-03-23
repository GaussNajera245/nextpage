import React from "react";
import { Grid, Typography, Paper, Link } from '@material-ui/core';
import { HeroHeaderType } from '../../models/types.models'; 
import h from './heroheader.module.css';

const HeroHeader: React.FC<HeroHeaderType> = p => {
  return (
    <Paper className={h.main} style={{ backgroundImage: `url(${p.image})` }}>
      {<img style={{ display: 'none' }} src={p.image} alt={p.imgText} />}
      <div className={h.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={h.content}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {p.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {p.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {p.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
  </Paper>
  );
};

export default HeroHeader;
