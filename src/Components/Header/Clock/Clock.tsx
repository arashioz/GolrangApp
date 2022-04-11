import { Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import moment from 'jalali-moment'

const Clock = () => {
    const getDate = moment()
    const [time, setTime] = useState(new Date)
    const tictok = () => setTime(new Date)

    useEffect(() => {
        const timer = setInterval(tictok, 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <>
            <Grid container spacing={2} direction='row' sx={{ mr: 4 }}>
                <Grid item>
                    {getDate.locale('fa').format("YYYY/MM/DD")}
                </Grid>
                <Grid item> | </Grid>
                <Grid item sx={{ width: 50 }}> {time.toLocaleTimeString('en-GB')}</Grid>
            </Grid>
        </>
    )
}

export default Clock