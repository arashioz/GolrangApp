import { Grid } from "@mui/material"
import { useParams } from "react-router-dom"

import '../../Assets/Styles/singleReactor.scss'
const SingleReactorLayout = () => {

    const { id } = useParams()

    return (
        <Grid container className='main'>

        </Grid>
    )
}

export default SingleReactorLayout