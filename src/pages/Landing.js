import React, { useEffect, useState } from 'react';
import { getOompas } from '../api/api'
import { setCachedData, getCachedData } from '../storage/storage'
import Header from '../components/Header';
import GridBox from '../components/GridBox';

export default function Landing() {
    const [ oompas, setOompas ] = useState([])

    useEffect(() => {
        if (!getCachedData()) {
            getOompas()
                .then(response => {
                    setCachedData(response.data.results);
                    setOompas(response.data.results);
                })
            .catch(err => {
                console.log(err)
            })
        } else {
            const cachedData = getCachedData();
            setOompas(cachedData);
        }
    }, [])
    console.log(oompas)
    return (
        <div>
            <Header />
            <GridBox oompas={oompas}/>
        </div>
    )
}
