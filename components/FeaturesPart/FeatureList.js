import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const FeatureList = props => {
    return ( 
        <Grid container direction="row" justify="space-around" spacing={2}>
            {props.features.map( e => (
            <Grid item xs={10} sm={5} style={{marginBottom: 10}} key={e.title}>
                <Card style={{minWidth: 275}}>
                    <CardContent >
                            {e.icon}  
                            <Typography style={{display:'inline'}} variant="h5" component="h2">
                                {e.title}
                            </Typography>
                        <Typography style={{fontSize: 14}} color="textSecondary" gutterBottom>
                            {e.text}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
    )
};

export default FeatureList;