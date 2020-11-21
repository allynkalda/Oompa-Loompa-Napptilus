import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../state/state';

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
    },
    text: {
        cursor: 'pointer'
    }
}));

export default function Header({ setDataOompas }) {
    const classes = useStyles();
    const history = useHistory();
    const [ { oompas } ] = useStateValue();

    const handleClick = () => {
        history.push(`/`);
        if (setDataOompas) {
            setDataOompas(oompas);
        }
    }
    return (
        <div className={classes.root}>
            <IconButton onClick={handleClick}>
                <img className={classes.image} src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" alt="logo"/>
            </IconButton>
            <div className={classes.text} onClick={handleClick}>
                <h3>Oompa Loopa's Crew</h3>
            </div>
        </div>
    )
}
