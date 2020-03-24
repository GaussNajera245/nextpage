import React, { CSSProperties } from "react";
import Grid from '@material-ui/core/Grid';

const styles:CSSProperties = {
    border: "none",
    height: "535px",
    width: '-webkit-fill-available',
};

const URI = "https://docs.google.com/forms/d/1dbRjBU4-i-8CvfEG593pTMwqEp29BdH7VWmvPVUoH4c/viewform?embedded=true";

const Form: React.FC = () => {
  return (
    <div id="form">
      <Grid container style={{ paddingBottom:60, paddingTop:20 }} alignItems='center' direction="row" justify="center">
        <Grid item xs={6} >
          <iframe 
              src= {URI} 
              style={styles}
              scrolling="no"
              ></iframe>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
