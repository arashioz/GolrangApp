import { Grid, Typography } from '@mui/material'
import logo from '../../Assets/Images/logo-padide.png'
import '../../Assets/Styles/header.scss'
const Header = () => {
    return (
        <Grid container direction='row' justifyContent='flex-end' alignItems='center' className='header-container' sx={{ml:0.5}} spacing={1}>
            <Typography variant='subtitle1'>
                پدیده شیمی جم
            </Typography>
            <Grid item className='logo'>
                <img style={{ width: '100%', height: '100%' }} src={logo} />
            </Grid>
            <Grid>
            </Grid>
        </Grid>
    )
}

export default Header