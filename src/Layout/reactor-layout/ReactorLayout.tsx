import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Reactor from '../../Components/Reactor/Reactor'

import Reaktor from '../../Reaktor'



import '../../Assets/Styles/layout-reactor.scss'
const LayoutReactor = () => {
    const reactorPowerStatus = false


    const history = useNavigate()

    const topLeftReactors = Reaktor.slice(0, 4)
    const topRightReactors = Reaktor.slice(4, 8)
    const mainRightReactor = Reaktor.slice(8, 10)
    // const mainRightReactor2 = Reaktor.slice(9, 10)
    const BottomReactor = Reaktor.slice(10, 18)
    const parak = Reaktor.slice(18, 21)



    const navigateHandler = (id: number) => {
        history(`/reactor/${id}`)
    }
    return (
        <Grid container className='layout-container'>
            <Grid item md={10}>
                <Grid container direction='row' alignItems='baseline' justifyContent='space-between' className='reactor-layout' sx={{ height: '43vh' }}>
                    {
                        topLeftReactors.map((i: any) => (
                            <Reactor _id={i._id} reactorName={i.reactorName} navigate={() => navigateHandler(i._id)} image={i.image} reactorSectionClass='reactor-Col' powerStatus={false}

                            />
                        ))
                    }
                    <Grid item>
                        {/* {'hidden'} */}
                    </Grid>
                    <Grid item>
                        {/* {'hidden'} */}
                    </Grid>
                    {
                        topRightReactors.map((i: any) => (
                            <Reactor _id={i._id} reactorName={i.reactorName} navigate={() => navigateHandler(i._id)} image={i.image} reactorSectionClass='reactor-Col' powerStatus={false}

                            />
                        ))
                    }

                </Grid>
                <Grid container direction='row' alignItems='flex-end' justifyContent='space-between' sx={{ height: '50vh' }}>
                    {
                        BottomReactor.map((i: any) => (
                            <Reactor _id={i._id} reactorName={i.reactorName} navigate={() => navigateHandler(i._id)} image={i.image} reactorSectionClass='reactor-Col-bottom' powerStatus={false}

                            />
                        ))
                    }

                </Grid>
            </Grid>
            <Grid item md={1}>
                <Grid
                    direction="column-reverse"
                    justifyContent="center"
                    alignItems="center"
                    className='reactor-container-main'
                >
                    {
                        mainRightReactor.map((i: any) => (
                            <Reactor _id={i._id} reactorName={i.reactorName} navigate={() => navigateHandler(i._id)} image={i.image} reactorSectionClass='reactor-Col-main' powerStatus={false}

                            />
                        ))
                    }
                </Grid>
            </Grid>
            <Grid item md={1}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    className='parak-container'
                    spacing={5}
                >
                    {parak.map((i: any) => (
                        <Reactor
                            _id={i._id}
                            reactorName={i.name}
                            navigate={() => navigateHandler(i._id)}
                            style={i.style}
                            image={i.image}
                            powerStatus={reactorPowerStatus}
                            reactorSectionClass="parak"
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>


    )
}

export default LayoutReactor