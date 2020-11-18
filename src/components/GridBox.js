import React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Cards from './Cards';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px'
    },
}));

export default function GridBox({ oompas }) {
    const classes = useStyles();
    const showGrid = () => {
        if (oompas.length) {
            const card = oompas.map(item => {
                return (
                    <Grid item size={4}>
                        <Cards oompa={item}/>
                    </Grid>
                )
            })
            return card;
        }
    }
    return (
        <Grid container className={classes.root} spacing={2} align="center" justify="center">
            {showGrid()}
        </Grid>
    )
}
