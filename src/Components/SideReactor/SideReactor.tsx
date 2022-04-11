import { Grid } from '@mui/material'
import '../../Assets/Styles/sideReactor.scss'
import React from 'react'

interface IFsideReactor {
    image: string | undefined;
}
const SideReactor = (props: IFsideReactor) => {
    const { image } = props

    return (
        <Grid container direction='column'>
            <Grid item>
                <svg width={300} height={80}>
                    <line x1={170} x2={190} y1={80} y2={60} stroke='white' />
                    <line x1={190} x2={240} y1={60} y2={60} stroke='white' />
                    <rect width={50} height={30} y={45} x={250} stroke='#23ffbd7e' rx={8} strokeWidth={2.5} fill='transparent' />
                    <text fill='white' x={260} y={65}>
                        125
                    </text>
                </svg>
                <Grid item className="reactor-image">
                    <img alt='reactorImage' width={110} src={image} />
                    <Grid item>
                        s
                    </Grid>
                </Grid>
                <svg width={300} height={80}>
                    <line x1={170} x2={190} y1={80} y2={60} stroke='white' />
                </svg>
            </Grid>
            <svg>

            </svg>
            <Grid item>
                s
            </Grid>
        </Grid >
    )
}

export default SideReactor