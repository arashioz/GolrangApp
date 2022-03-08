import { Grid, IconButton, Tooltip, Typography } from '@mui/material'
import { Home, Settings } from '@mui/icons-material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


import Logo from '../../Assets/Images/logo.png'
import '../../Assets/Styles/sidebar.scss'

interface MENUInterface {
    route?: string
    icon?: React.ReactNode;
    label?: string;
}

const menuItems: MENUInterface[] = [{
    route: '/reactors',
    icon: <Home />,
    label: 'Home'
},
{
    route: '/setting',
    icon: <Settings />,
    label: 'Setting'
}
]

const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const { pathname } = location;


    const onClickHadnler = (linkTo: string) => {
        navigate(`${linkTo}`)
    }
    return (
        <Grid container direction='column'>
            <Grid item sx={{ marginTop: '5px' }}>
                <img
                    style={{ width: "30px" }}
                    src={Logo}
                />
                <hr className='drawer' />
            </Grid>
            {
                menuItems.map((i: any, idx: number) => (
                    <Grid key={idx} item className={`menuItems ${i.route === pathname ? 'isActiveMenu' : null}`} sx={{ mt: 1, }} >
                        <Tooltip placement='right' title={i.label}>
                            <IconButton aria-placeholder={i.label} sx={{ color: 'white' }} onClick={() => onClickHadnler(i.route)}>
                                {i.icon}
                            </IconButton>
                        </Tooltip>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Sidebar