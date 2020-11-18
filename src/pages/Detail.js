import React from 'react';
import { useStateValue } from '../state/state';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px'
    },
    image: {
        width: '100%'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '80%',
        padding: '20px'
    },
    top: {
        paddingTop: '20px'
    }
  }));
export default function Detail() {
    const classes = useStyles();
    const [{ oompa }] = useStateValue();
    return (
        <Grid container className={classes.root}>
            <Grid item md={6}>
                <img alt="oompa" src={oompa.image} className={classes.image} />
            </Grid>
            <Grid item md={6}>
                <div className={classes.text}>
            <Typography variant="h5">{oompa.first_name} {oompa.last_name}</Typography>
            <Typography variant="body1">{oompa.gender === 'F' ? 'Woman' : 'Man'}</Typography>
            <Typography variant="body1">{oompa.profession}</Typography>
            <Typography variant="body1" className={classes.top}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </div>
            </Grid>
        </Grid>
    )
}
