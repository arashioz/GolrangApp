import { Divider, Grid, Typography, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";

import '../../Assets/Styles/gauges.scss'

interface IPgauge {
    gaugeName: string;
    gaugeData: 0 | number;
    noneBack?: boolean;
}
const Gauge = (props: IPgauge) => {
    const { gaugeName, gaugeData, noneBack } = props

    const [strokColor, setStrokColor] = React.useState('#0008FF')


    useEffect(() => {
        if (gaugeData > 58) {
            setStrokColor('#FF0000')
        } else if (gaugeData > 45) {
            setStrokColor('#FF8000')
        } else if (gaugeData > 30) {
            setStrokColor('#00FF00')
        } else if (gaugeData > 25) {
            setStrokColor("#0099ff")
        } else if (gaugeData > 10) {
            setStrokColor('#0008FF')
        } else {
            setStrokColor('#0008FF')
        }

    }, [gaugeData, strokColor])

    return (
        <>
            <Grid item md={4} lg={4} sm={12} xs={12} className={`${noneBack ? null : 'gauges-container'}`}>
                <Typography>{gaugeName}</Typography>
                <Divider variant='middle' sx={{ backgroundColor: '#9d9d9d', }} />
                <Box sx={{ width: 150, margin: '0 auto', mt: 2 }} >

                    <CircularProgressbarWithChildren
                        value={75}
                        strokeWidth={1}
                        styles={buildStyles({
                            pathColor: "#FF0000",
                            rotation: 1 / 2 + 1 / 8,
                            trailColor: "transparent"
                        })}
                    >
                        <CircularProgressbarWithChildren
                            value={45}
                            strokeWidth={1}
                            styles={buildStyles({
                                pathColor: "#FF8000",
                                rotation: 1 / 2 + 1 / 8,
                                trailColor: "transparent"
                            })}
                        >
                            <CircularProgressbarWithChildren
                                value={35}
                                strokeWidth={1}
                                styles={buildStyles({
                                    pathColor: "#00FF00",
                                    rotation: 1 / 2 + 1 / 8,
                                    trailColor: "transparent"
                                })}
                            >
                                <CircularProgressbarWithChildren
                                    value={25}
                                    strokeWidth={1}
                                    styles={buildStyles({
                                        pathColor: "#0099ff",
                                        rotation: 1 / 2 + 1 / 8,
                                        trailColor: "transparent"
                                    })}
                                >
                                    <CircularProgressbarWithChildren
                                        value={15}
                                        strokeWidth={1}
                                        styles={buildStyles({
                                            pathColor: "#0008FF",
                                            rotation: 1 / 2 + 1 / 8,
                                            trailColor: "transparent"
                                        })}
                                    >
                                        <div style={{ width: "90%" }}>
                                            <CircularProgressbar
                                                value={gaugeData}
                                                strokeWidth={15}
                                                text={`${gaugeData}C`}
                                                circleRatio={0.77}
                                                styles={buildStyles({
                                                    rotation: 1 / 2 + 1 / 9,
                                                    pathColor: `${strokColor}`,
                                                    trailColor: "#121212"
                                                })}
                                            />
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </CircularProgressbarWithChildren>
                            </CircularProgressbarWithChildren>
                        </CircularProgressbarWithChildren>
                    </CircularProgressbarWithChildren>
                </Box>
            </Grid>
        </>
    )
}

export default Gauge