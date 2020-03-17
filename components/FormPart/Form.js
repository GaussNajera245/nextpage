import React from "react";
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'

const Form = props => {
  return (
    <Grid container style={{minWidth:450}} direction="row" justify="center">
      <Grid item xs={11} >
        <Iframe url="https://docs.google.com/forms/d/1dbRjBU4-i-8CvfEG593pTMwqEp29BdH7VWmvPVUoH4c/viewform?edit_requested=true"
            width="100%"
            height="535px"
            className="myClassname"
            // display="initial"
            // position="relative"
            frameBorder="0" 
            scrolling="no"
            />
      </Grid>
    </Grid>
  );
};

export default Form;
