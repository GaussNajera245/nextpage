import React from 'react';
import FeatureList from './FeatureList';
import {Grid, Typography} from '@material-ui/core';

const Features = props => {
    return(
        <Grid container direction="column" justify="center" align="center" style={{marginTop:35, marginBottom:35}}>
            <Grid item >
                <Typography variant="h3" component="h2">
                    HELLO
                </Typography> 
            </Grid>
            <Grid item style={{paddingTop:15, paddingBottom:20}}>
                <Typography variant="h5" component="p">
                dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi
                </Typography> 
            </Grid>
            <FeatureList features={props.features}  />
        </Grid>
    );
};

export default Features;
