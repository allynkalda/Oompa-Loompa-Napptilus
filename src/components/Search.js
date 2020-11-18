import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    search: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px',
    },
    field: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '1rem',
        },
        backgroundColor: 'white',
        borderRadius: '5px'
    },
    icon: {
        height: '18px'
    }
  }));

export default function Search({ onClick }) {
    const classes = useStyles();
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInput = event => {
      setSearchInput(event.target.value);
    };
    return (
        <div className={classes.search}>
            <TextField className={classes.field} id="outlined-basic" label="Search" variant="outlined" size="small" onChange={handleSearchInput}/>
            <IconButton color="primary" variant="contained" onClick={() => onClick(searchInput)}>
                <img src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png" 
                    alt="search-button"
                    className={classes.icon}
                />
            </IconButton>
        </div>
    )
}
