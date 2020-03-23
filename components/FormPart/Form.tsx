import React, { CSSProperties } from "react";
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'

const styles:CSSProperties = {
    border: "none",
    height: "535px",
    width: '-webkit-fill-available',
};

const Form: React.FC = () => {
  return (
    <Grid container style={{ paddingBottom:10, paddingTop:20 }} alignItems='center' direction="row" justify="center">
      <Grid item xs={6} >
        <iframe 
            src="https://docs.google.com/forms/d/1dbRjBU4-i-8CvfEG593pTMwqEp29BdH7VWmvPVUoH4c/viewform?embedded=true" 
            style={styles}
            scrolling="no"
            ></iframe>
      </Grid>
    </Grid>
  );
};

export default Form;

{/*       
        <Iframe url="https://docs.google.com/forms/d/1dbRjBU4-i-8CvfEG593pTMwqEp29BdH7VWmvPVUoH4c/viewform?edit_requested=true"
            width="100%"
            height="535px"
            className="myClassname"
            // display="initial"
            // position="relative"
            // frameBorder="0" 
            scrolling="no"
            /> */}