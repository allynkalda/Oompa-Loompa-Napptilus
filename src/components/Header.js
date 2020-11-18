import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
        paddingLeft: '30px'
    },
    image: {
        height: '30px',
        padding: '10px'
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img className={classes.image} src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" alt="logo"/>
            <h3>Oompa Loopa's Crew</h3>
        </div>
    )
}
