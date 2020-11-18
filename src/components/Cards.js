import React from 'react';
import { Card, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '25vw',
      },
    media: {
        height: 250,
    },
    text: {
        padding: '20px 0'
    }
}));

export default function Cards({ oompa }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={oompa.image}
                title={oompa.first_name}
            />
        <div className={classes.text}>
            <Typography variant="h5">{oompa.first_name} {oompa.last_name}</Typography>
            <Typography variant="body1">{oompa.gender === 'F' ? 'Woman' : 'Man'}</Typography>
            <Typography variant="body1">{oompa.profession}</Typography>
        </div>
        </Card>
    )
}
