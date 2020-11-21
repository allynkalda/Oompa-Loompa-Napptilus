import React, { useEffect, useState } from 'react';
import { getOompas } from '../api/api'
import { setCachedData, getCachedData } from '../storage/storage'
import GridBox from '../components/GridBox';
import Search from '../components/Search';
import { useStateValue } from '../state/state';
import Header from '../components/Header';

export default function Landing() {
    const [ dataOompas, setDataOompas ] = useState([])
    const [ { oompas }, dispatch ] = useStateValue();

    const handleSearch = (value) => {
        if (value) {
            const searched = oompas.filter(item => item.first_name.toLowerCase().includes(value.toLowerCase()) || item.last_name.toLowerCase().includes(value.toLowerCase()));
            setDataOompas(searched);
        } else {
            setDataOompas(dataOompas);
        }
    };

    useEffect(() => {
        if (!getCachedData()) {
            getOompas()
                .then(response => {
                    setCachedData(response.data.results);
                    setDataOompas(response.data.results);
                    dispatch({ type: 'set_oompas', oompas: response.data.results});
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            const cachedData = getCachedData();
            setDataOompas(cachedData);
            dispatch({ type: 'set_oompas', oompas: cachedData});
        }
    }, [ dispatch ])

    return (
        <div>
            <Header setDataOompas={setDataOompas}/>
            <Search onClick={handleSearch}/>
            <GridBox oompas={dataOompas}/>
        </div>
    )
}
