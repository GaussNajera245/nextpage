import React from 'react';
import FeatureList from './FeatureList';
import { Grid, Paper } from '@material-ui/core';
import { FeatureListProps } from '../../models/types.models'
import { Title3, Title4 } from '../Text';

const Features: React.FC<FeatureListProps> = props => {
    return(
        <div id="features">
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Paper style={{margin:40, padding:35, paddingTop:50, background: 'rgba(254, 254, 254, 0.5)'}}> 
                        <Grid container>
                            <Grid item xs={12}>
                                <Title3 text='Services' />
                            </Grid>
                            <Grid item xs={12} style={{paddingTop:15, paddingBottom:20}}>
                                <Title4 text='dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi'/>
                            </Grid>
                            <FeatureList features={props.features}  />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Features;
