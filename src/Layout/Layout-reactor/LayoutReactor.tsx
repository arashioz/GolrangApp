import { Grid, Box } from '@mui/material'




import '../../Assets/Styles/layout-reactor.scss'

import Reaktor from '../../Reaktor'

const LayoutReactor = () => {


    const topReactors = Reaktor.slice(0, 8)



    return (
        <Grid container>
            <Grid container direction='row' justifyContent='center' spacing={5}>
                {topReactors.map((i: any) => (
                    <Grid lg={1} md={1} key={i.id} item className='reactorCol'>
                        <img src={i.image[0]} />
                    </Grid>
                ))}
            </Grid>
        </Grid >

    )
}

export default LayoutReactor