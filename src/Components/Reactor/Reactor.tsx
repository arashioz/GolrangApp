import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react';

import '../../Assets/Styles/reactor.scss'


const Reactor = (props: { _id: number, reactorName: string, navigate: () => void, style?: string, image: string, reactorSectionClass: string, powerStatus: boolean }) => {
    const [reactorPowerStatus, setReactPowerStatus] = useState<Boolean>(true)

    const { _id, reactorName, powerStatus, navigate, style, image, reactorSectionClass } = props


    useEffect(() => {
        setReactPowerStatus(!powerStatus)
    }, [powerStatus])
    return (
        <>
            <Grid lg={1} md={1} key={_id} item className={reactorSectionClass} onClick={navigate}>
                <Grid className={` reactor-image ${style === style ? style : null}`}>
                    <img className={` ${reactorPowerStatus ? 'reactor-on' : 'reactor-off'}`} src={image[0]} alt={reactorName} />
                </Grid>
                <Grid container className='reactor-gauges' direction='row' justifyItems='center' justifyContent='space-evenly'>
                    <Grid item sx={{ width: 45 }} className='gauge-1'>
                        <Typography variant='subtitle2'>
                            22
                        </Typography>
                    </Grid>
                    <Grid item sx={{ width: 45 }} className='gauge-2'>
                        <Typography variant='subtitle2'>
                            33
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Reactor