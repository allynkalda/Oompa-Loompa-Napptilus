import React from 'react';
import { Card, Typography, CardMedia, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from '../state/state';
import { useHistory } from "react-router-dom";

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
    const history = useHistory();
    const [ , dispatch ] = useStateValue();
    const classes = useStyles();
    const handleClick = () => {
        dispatch({ type: 'set_oompa', oompa: oompa});
        history.push(`/${oompa.id}`);
    }
    return (
        <Card className={classes.root} onClick={handleClick}>
            <CardActionArea>
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
        </CardActionArea>
        </Card>
    )
}
