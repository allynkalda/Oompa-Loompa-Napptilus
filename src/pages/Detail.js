import React from 'react';
import { useStateValue } from '../state/state';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px'
    },
    image: {
        width: '100%'
    },
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
            {oompa.first_name} {oompa.last_name}
            </Grid>
        </Grid>
    )
}
