import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'




import '../../Assets/Styles/layout-reactor.scss'

import Reaktor from '../../Reaktor'

const LayoutReactor = () => {
    const history = useNavigate()

    const topLeftReactors = Reaktor.slice(0, 4)
    const topRightReactors = Reaktor.slice(4, 8)
    const mainRightReactor1 = Reaktor.slice(8, 9)
    const mainRightReactor2 = Reaktor.slice(9, 10)



    const navigateHandler = (id: number) => {
        history(`/reactor/${id}`)
    }
    return (
        <Grid container>
            <Grid item md={11} >
                <Grid container direction='row' justifyContent='space-between' spacing={4.5} sx={{ p: 2 }}>
                    {topLeftReactors.map((i: any) => (
                        <Grid lg={1} md={1} key={i._id} item className='reactor-Col' onClick={() => navigateHandler(i._id)}>
                            <Grid className={`${i.style === 'reactor-2' ? "reactor-2" : 'reactor-image'}`}>
                                <img src={i.image[0]} alt={i.name} />
                            </Grid>
                            <Grid container className='reactor-gauges' direction='row' justifyItems={'center'} justifyContent={'space-between'}>
                                <Grid item className='gauge-1'>
                                    <Typography variant='subtitle2'>
                                        22
                                    </Typography>
                                </Grid>
                                <Grid item className='gauge-2'>
                                    <Typography variant='subtitle2'>
                                        33
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    ))}
                    <Grid item>

                    </Grid>
                    <Grid item>

                    </Grid>
                    {topRightReactors.map((i: any) => (
                        <Grid lg={1} md={1} key={i._id} item className='reactor-Col' onClick={() => navigateHandler(i._id)}>
                            <Grid className='reactor-image'>
                                <img src={i.image[0]} alt={i.name} />
                            </Grid>
                            <Grid container className='reactor-gauges' direction='row' justifyItems={'center'} justifyContent={'space-between'}>
                                <Grid item className='gauge-1'>
                                    <Typography variant='subtitle2'>
                                        22
                                    </Typography>
                                </Grid>
                                <Grid item className='gauge-2'>
                                    <Typography variant='subtitle2'>
                                        33
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    ))}
                </Grid>
                <Grid container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center">
                    {mainRightReactor1.map((i: any) => (
                        <Grid lg={1} md={1} key={i._id} item className='reactor-Col-main' onClick={() => navigateHandler(i._id)}>
                            <Grid className='reactor-image-main'>
                                <img src={i.image[0]} alt={i.name} />
                            </Grid>
                            <Grid container className='reactor-gauges' direction='row' alignItems='flex-start' justifyContent={'space-evenly'}>
                                <Grid item className='gauge-1'>
                                    <Typography variant='subtitle2'>
                                        22
                                    </Typography>
                                </Grid>
                                <Grid item className='gauge-2'>
                                    <Typography variant='subtitle2'>
                                        33
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Grid container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center">
                    {mainRightReactor2.map((i: any) => (
                        <Grid lg={1} md={1} key={i._id} item className='reactor-Col-main' onClick={() => navigateHandler(i._id)}>
                            <Grid className='reactor-image-main'>
                                <img src={i.image[0]} alt={i.name} />
                            </Grid>
                            <Grid container className='reactor-gauges' direction='row' alignItems='flex-start' justifyContent={'space-evenly'}>
                                <Grid item className='gauge-1'>
                                    <Typography variant='subtitle2'>
                                        22
                                    </Typography>
                                </Grid>
                                <Grid item className='gauge-2'>
                                    <Typography variant='subtitle2'>
                                        33
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Grid container direction='row' justifyContent='flex-start' alignItems='center'>

                </Grid>
            </Grid>
            <Grid item md={1} lg={1}>
                <Grid container direction='column' justifyContent='space-around' spacing={5} sx={{ p: 2 }}>
                    <Grid>
                        hwl
                    </Grid>
                    <Grid>
                        hwl
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default LayoutReactor