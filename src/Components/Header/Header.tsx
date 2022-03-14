import { Avatar, Button, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material'
import logo from '../../Assets/Images/logo-padide.png'
import avatar from '../../Assets/Images/avatar.png'
import '../../Assets/Styles/header.scss'
import Clock from './Clock/Clock';
import React, { useState } from 'react';


const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Stack className='header-container' direction='row-reverse' alignItems="center"
                spacing={2} >
                <Grid item className='logo'>
                    <img style={{ width: '100%', height: '100%' }} src={logo} />
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1' className='company'>
                        پدیده شیمی جم
                    </Typography>
                </Grid>
                <Grid item>
                    <Stack direction="row">
                        <Button onClick={handleClick}>
                            <Typography sx={{ color: 'white', mr: 2 }} variant="subtitle1">
                                آرش بلالی
                            </Typography>
                            <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
                        </Button>
                        <Menu
                            // sx={{ backgroundColor: 'red' }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleClose} >
                                <Typography variant='subtitle1'>
                                    کاربری
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose} >
                                <Typography variant='subtitle1'>
                                    تغییر رمز
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose} >
                                <Typography variant='subtitle1'>
                                    خروج
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Grid>
                <Grid item md={2}>
                    <Clock />
                </Grid>
            </Stack>
        </>

    )
}

export default Header