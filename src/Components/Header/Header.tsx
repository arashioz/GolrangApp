import { Avatar, Button, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React from 'react';
import logo from '../../Assets/Images/logo-padide.png'
import avatar from '../../Assets/Images/avatar.png'
import '../../Assets/Styles/header.scss'
const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid container>
            <Grid container direction='row' justifyContent='flex-end' alignItems='center' className='header-container' sx={{ ml: 0.5 }} spacing={1}>

                <Grid item md={1} sx={{ mr: 2 }}>
                    <Stack direction="row" spacing={1}>

                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Typography variant='subtitle1' sx={{ color: 'white' }}>
                                آرش بلالی
                            </Typography>
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleClose}>کاربری</MenuItem>
                            <MenuItem onClick={handleClose}>تنظیمات</MenuItem>
                            <MenuItem onClick={handleClose}>خروج</MenuItem>
                        </Menu>
                        <Avatar alt="arash balali" src={avatar} sx={{ height: 25, width: 25, mt: 2 }} />
                    </Stack>
                </Grid>

                <Typography variant='subtitle1'>
                    پدیده شیمی جم
                </Typography>
                <Grid item className='logo'>
                    <img style={{ width: '100%', height: '100%' }} src={logo} />
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Header