import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Link } from '@material-ui/core';
import { HeroHeaderType } from '../../models/types.models'; 

const useStyles = makeStyles( theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://i.picsum.photos/id/99/1095/400.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '500px'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const HeroHeader: React.FC<HeroHeaderType> = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${props.image})` }}>
    {<img style={{ display: 'none' }} src={props.image} alt={props.imgText} />}
    <div className={classes.overlay} />
    <Grid container>
      <Grid item md={6}>
        <div className={classes.mainFeaturedPostContent}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            {props.description}
          </Typography>
          <Link variant="subtitle1" href="#">
            {props.linkText}
          </Link>
        </div>
      </Grid>
    </Grid>
  </Paper>
    // <Grid container style={{ maxHeight:'600px', overflow:'hidden'}}>
    //     {<img style={{width:'100%'}} src='https://i.picsum.photos/id/99/1095/400.jpg' alt='{post.imageText}' />}
    // </Grid>
  );
};

export default HeroHeader;


      // {/* Increase the priority of the hero background image */}
      // {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      // <div className={classes.overlay} />
      // <Grid container>
      //   <Grid item md={6}>
      //     <div className={classes.mainFeaturedPostContent}>
      //       <Typography component="h1" variant="h3" color="inherit" gutterBottom>
      //         {post.title}
      //       </Typography>
      //       <Typography variant="h5" color="inherit" paragraph>
      //         {post.description}
      //       </Typography>
      //       <Link variant="subtitle1" href="#">
      //         {post.linkText}
      //       </Link>
      //     </div>