import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Typography } from '@material-ui/core';

interface textProps {
    text:string
};

interface imgProps {
    height:string,
    src:string
};

interface logoProps {
    text:string,
    dark?:boolean
};

const some1:object = {
    fontFamily: "'Caveat', cursive",
    color: "white",
    fontSize: '2.7rem',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    cursor:'pointer'
  };

  const some2:object = {
    fontFamily: "'Caveat', cursive",
    color: "black",
    fontSize: '2.7rem',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10
  };

export const Paragraph: React.FC<textProps> = props => {
    return (
        <Typography  variant='body1' > {props.text} </Typography>
    );
};

export const Title1: React.FC<textProps> = props => {
    return (
        <Typography variant='h4' align="center" style={{fontWeight:600}} > {props.text} </Typography>
    );
};

export const Title2: React.FC<textProps> = props => {
    return (
        <Typography variant='h6' > {props.text} </Typography>
    );
};

export const Title3: React.FC<textProps> = props => {
    return (
        <Typography align="center" variant='h3' > {props.text} </Typography>
    );
};

export const Title4: React.FC<textProps> = props => {
    return (
        <Typography  align="center" variant='h5' > {props.text} </Typography>
    );
};

export const Logo: React.FC<logoProps> = props => {
    const [hover, setHover] = useState<boolean>(false);
    const hobs = () => setHover(!hover);
    const router = useRouter();

    const goToMain = () => router.push('/');

    return (
        <div> 
            { !props.dark ?
                <p style={some2}> {props.text} </p> :

                <p  style={some1} 
                    onClick={goToMain} 
                    onMouseEnter={ hobs }
                    onMouseLeave={ hobs }
                    > {props.text} </p> 
            }
            
        </div>
    );
};

export const Image: React.FC<imgProps> = props => {
    const [hover, setHover] = useState<boolean>(false);
    const hobs = () => setHover(!hover);
    const router = useRouter();

    const goToMain = () => router.push('/');

    return (
        <img 
        src={props.src}
        alt="logo" 
        height= {props.height} 
        style={ hover ? { cursor:'pointer'}: undefined } 
        onClick={goToMain} 
        onMouseEnter={ hobs }
        onMouseLeave={ hobs }
        />
    ) 
}