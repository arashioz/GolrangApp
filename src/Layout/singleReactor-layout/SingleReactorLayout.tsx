import { Grid, Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import reaktors from "../../Reaktor"
import '../../Assets/Styles/singleReactor.scss'
import { useEffect, useState } from "react"
import Header from "../../Components/Header/Header"
import AlarmBox from '../../Components/AlaramBox/AlarmBox'
import SideReactor from "../../Components/SideReactor/SideReactor"
import Gauge from "../../Components/Gauge/Gauge"
import GaugeAndGraph from '../../Components/Gauge/GaugeAndGraph'
import { io } from 'socket.io-client'

interface IFstate {
    _id: number;
    name: string;
    image: string
}
const socket = io('wss://80.210.22.153:34111/coolingTemperature').connect()
// socket.emit('coolingTemperature',{
//     reactorName:"REAKTOR_1",
//     startDateBeforeMS:30000
// })

console.log(socket.connected)
const SingleReactorLayout = () => {

    const [reactorDetail, setReactorDetail] = useState<IFstate | undefined>()

    const { id } = useParams()


    useEffect(() => {
        reaktors.map((i: any) => {
            if (i._id === Number(id)) {
                return (
                    setReactorDetail({
                        _id: i._id,
                        name: i.name,
                        image: i.image,
                    })
                )
            }
        })

    }, [id])


    console.log(reactorDetail)


    const alarmData = {
        alertData: [{ alertText: 'Warning For CoolingTower', alertMode: 'warning', alertCat: 'notification' }, { alertText: 'error For CoolingTower', alertMode: 'error', alertCat: 'alarm' }, { alertText: 'change CoolingTower Deg', alertMode: 'success', alertCat: 'event' }, { alertText: 'change CoolingTower MOVE', alertMode: 'success', alertCat: 'event' }, { alertText: 'change CoolingTower MOVE', alertMode: 'warning', alertCat: 'alarm' }]
    }
    return (
        <>
            <Grid container direction='row'>
                <Grid item md={3} lg={3} className='reactor-container'>
                    <Stack direction="row" alignItems='center'
                        className='reactor-header'>
                        <Grid item lg md>
                            {reactorDetail?.name}
                        </Grid>
                        <Grid item lg md>
                            <Typography>
                                Batch : {reactorDetail?._id}
                            </Typography>
                        </Grid>
                    </Stack>
                    <Stack className='reactor-alarmbox'>
                        <AlarmBox alertData={alarmData.alertData} />
                    </Stack>
                    <Stack className='reactor-main-image'>
                        <SideReactor image={reactorDetail?.image[1]} />
                    </Stack>
                </Grid>
                <Grid item md lg >
                    <Header />
                    <Stack direction="column" spacing={3} className="reactor-main-data">
                        <Stack direction="row" spacing={2}>
                            <Gauge gaugeData={21} gaugeName={'sa'} />
                            <Gauge gaugeData={25} gaugeName={'sa'} />
                            <Gauge gaugeData={51} gaugeName={'sa'} />
                            <Gauge gaugeData={41} gaugeName={'sa'} />
                            <Gauge gaugeData={91} gaugeName={'sa'} />
                            <Gauge gaugeData={21} gaugeName={'sa'} />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <GaugeAndGraph />
                            <GaugeAndGraph />
                        </Stack>

                    </Stack>
                </Grid>
            </Grid>


        </>
    )
}

export default SingleReactorLayout