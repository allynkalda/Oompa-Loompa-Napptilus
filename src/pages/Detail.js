import React, { useEffect, useState } from 'react';
import { useStateValue } from '../state/state';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getOneOompa } from '../api/api'
import { useLocation } from 'react-router-dom';
import { setCachedOompa, getCachedOompa } from '../storage/storage'
import Header from '../components/Header';

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
    const location = useLocation();
    const [ chosenOompa, setChosenOompa ] = useState({});
    const [ , dispatch ] = useStateValue();
    useEffect(() => {
        const id = location.pathname.split('/')[1];
        if (!getCachedOompa(id)) {
            getOneOompa(id)
            .then(result => {
                setCachedOompa(result.data, id);
                setChosenOompa(result.data);
            })
            .catch(err => console.log(err))
        } else {
            const cachedData = getCachedOompa(id);
            setChosenOompa(cachedData);
        }
        dispatch({ type: 'set_oompa', oompa: chosenOompa});
    }, [])

    return (
        <>
        <Header />
        <Grid container className={classes.root}>
            <Grid item md={6}>
                <img alt="oompa" src={chosenOompa.image} className={classes.image} />
            </Grid>
            <Grid item md={6}>
            <div className={classes.text}>
                <Typography variant="h5">{chosenOompa.first_name} {chosenOompa.last_name}</Typography>
                <Typography variant="body1">{chosenOompa.gender === 'F' ? 'Woman' : 'Man'}</Typography>
                <Typography variant="body1">{chosenOompa.profession}</Typography>
                <div className={classes.top}>
                    <div dangerouslySetInnerHTML={{ __html: chosenOompa.description }} />
                </div>
            </div>
            </Grid>
        </Grid>
        </>
    )
}
