import { Grid } from '@mui/material'
import '../../Assets/Styles/sideReactor.scss'
import React from 'react'
//@ts-ignore

interface IFsideReactor {
    image: string | undefined;
}
const SideReactor = (props: IFsideReactor) => {
    const { image } = props

    return (
        <Grid container direction='column'>
            <Grid item>
                <Grid item className="reactor-image">
                    <svg width={500} height={650} fill="none">
                        <text fill='white' fontSize='12px' x={325} y={40}>
                            +99.999
                        </text>
                        <image width={460} height={580} href={image} />
                        <text fill='white' fontSize='12px' x={354} y={208}>
                            +99.800
                        </text>
                        <text fill='white' fontSize='12px' x={354} y={273}>
                            +99.908
                        </text>
                        <text fill='white' fontSize='12px' x={366} y={415}>
                            +99.800
                        </text>
                        <text fill='white' fontSize='12px' x={367} y={460}>
                            -99.800
                        </text>
                        <text fill='white' fontSize='12px' x={55} y={460}>
                            -99.800
                        </text>
                        <text fill='white' fontSize='12px' x={105} y={410}>
                           Feshar
                        </text>
                        <text fill='white' fontSize='12px' x={45} y={414}>
                            -99.800
                        </text>
                        <text fill='white' fontSize='12px' x={55} y={460}>
                            -99.800
                        </text>
                    </svg>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default SideReactor