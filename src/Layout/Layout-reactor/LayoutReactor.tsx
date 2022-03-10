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
    const mainRightReactor1 = Reaktor.slice(8, 9)
    const mainRightReactor2 = Reaktor.slice(9, 10)
    const BottomReactor = Reaktor.slice(10, 18)



    const navigateHandler = (id: number) => {
        history(`/reactor/${id}`)
    }
    return (
        <Grid container>
            <Grid item md={11} >
                <Grid container direction='row' justifyContent='space-around' spacing={4} sx={{ pt: 1 }}>
                    {topLeftReactors.map((i: any) => (
                        <Reactor
                            _id={i._id}
                            reactorName={i.name}
                            navigate={() => navigateHandler(i._id)}
                            style={i.style}
                            image={i.image}
                            powerStatus={reactorPowerStatus}
                            reactorSectionClass='reactor-Col'
                        />

                    ))}
                    <Grid item>
                        {/* //// Hidden Reactor */}
                    </Grid>
                    <Grid item>
                        {/* //// Hidden Reactor */}
                    </Grid>
                    {topRightReactors.map((i: any) => (
                        <Reactor
                            _id={i._id}
                            reactorName={i.name}
                            navigate={() => navigateHandler(i._id)}
                            style={i.style}
                            image={i.image}
                            powerStatus={reactorPowerStatus}
                            reactorSectionClass='reactor-Col'
                        />
                    ))}
                </Grid>
                <Grid container
                    direction="row"
                    justifyContent="flex-end"
                    spacing={5}
                    alignItems="center">
                    {mainRightReactor1.map((i: any) => (
                        <Reactor
                            _id={i._id}
                            reactorName={i.name}
                            navigate={() => navigateHandler(i._id)}
                            style={i.style}
                            image={i.image}
                            powerStatus={reactorPowerStatus}
                            reactorSectionClass="reactor-Col-main"
                        />
                    ))}
                </Grid>
                <Grid container
                    direction="row"
                    justifyContent="flex-end"
                    spacing={5}
                    alignItems="center">

                    {mainRightReactor2.map((i: any) => (
                        <Reactor
                            _id={i._id}
                            reactorName={i.name}
                            navigate={() => navigateHandler(i._id)}
                            style={i.style}
                            image={i.image}
                            powerStatus={reactorPowerStatus}
                            reactorSectionClass="reactor-Col-main"
                        />
                    ))}
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-end"
                    spacing={4}
                >
                    {BottomReactor.map((i: any) => (
                        <Reactor
                            _id={i._id}
                            reactorName={i.name}
                            navigate={() => navigateHandler(i._id)}
                            style={i.style}
                            image={i.image}
                            powerStatus={reactorPowerStatus}
                            reactorSectionClass="reactor-Col-bottom"
                        />
                    ))}
                </Grid>
            </Grid>
            <Grid item md={1} lg={1}>

                <Grid>
                    hwl
                </Grid>
                <Grid>
                    hwl
                </Grid>
            </Grid>
        </Grid>


    )
}

export default LayoutReactor