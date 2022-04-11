import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import CloseIcon from '@mui/icons-material/Close';
import AlertItem from './Alert/AlertItem';
import { Collapse, IconButton, Tabs, Typography } from '@mui/material';
import { Alert } from '@material-ui/lab'

import '../../Assets/Styles/alarmbox.scss'

interface IAlert {
    alertData: { alertText: string, alertMode: string, alertCat: string }[]
}
const AlarmBox = (props: IAlert) => {
    const { alertData } = props

    const [alarmCat, setAlramCat] = React.useState<any[]>([])
    const [eventCat, setEventCat] = React.useState<any[]>([])
    const [notificationCat, setNotificationCat] = React.useState<any[]>([])

    React.useEffect(() => {
        setAlramCat(
            alertData.filter((i) => i.alertCat === 'alarm')
        )
        setEventCat(
            alertData.filter((i) => i.alertCat === 'event')
        )
        setNotificationCat(
            alertData.filter((i) => i.alertCat === 'notification')
        )
    }, [])
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '100%', height: '65%' }}>
            <TabContext value={value}>
                {/* borderColor: 'divider', borderBottom: 0.5 */}
                <Box sx={{ width: '100%' }} >
                    <Tabs
                        
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        variant="scrollable"
                        // centered
                        allowScrollButtonsMobile
                    >
                        <Tab wrapped value="1" sx={{ color: 'white', textTransform: 'none' }} label={<>
                            <Typography variant='subtitle2' >All <span style={{ color: 'white', backgroundColor: 'gray', padding: '4px 8px', borderRadius: '255px' }}>{alertData.length}</span></Typography>
                        </>} />
                        <Tab value="2" sx={{ color: 'white', textTransform: 'none' }} label={<>
                            <Typography variant='subtitle2' >Alarm <span style={{ color: 'white', backgroundColor: 'red', padding: '4px 8px', borderRadius: '255px' }}>{alarmCat.length}</span></Typography>
                        </>} />
                        <Tab wrapped value="3" sx={{ color: 'white', textTransform: 'none' }} label={<>
                            <Typography variant='subtitle2'  >Event <span style={{ color: 'white', backgroundColor: 'blue', padding: '4px 8px', borderRadius: '255px' }}>{notificationCat.length}</span></Typography>
                        </>} />
                        <Tab value="4" sx={{ color: 'white', textTransform: 'none' }} label={<>
                            <Typography variant='subtitle2' >Device <span style={{ color: 'white', backgroundColor: '#ef5350', padding: '4px 8px', borderRadius: '255px' }}>{eventCat.length}</span></Typography>
                        </>} />

                    </Tabs>
                </Box>
                <TabPanel value="1" sx={{ overflow: 'scroll', height: '100%', pt: 0 }} className='alarmbox-tabpanel'>
                    {alertData.map((i: any, idx: number) => (
                        <AlertItem alertMode={i.alertMode} alertText={i.alertText} key={idx} />
                    ))}
                </TabPanel>
                <TabPanel value="2" sx={{ overflow: 'scroll', height: '100%', pt: 0 }} className='alarmbox-tabpanel'>
                    {
                        alarmCat?.map((i: any, idx: number) => (
                            <AlertItem alertMode={i.alertMode} alertText={i.alertText} key={idx} />
                        ))
                    }
                </TabPanel>
                <TabPanel value="3" sx={{ overflow: 'scroll', height: '100%', pt: 0 }} className='alarmbox-tabpanel'>
                    {
                        notificationCat.map((i: any, idx: number) => (
                            <AlertItem alertMode={i.alertMode} alertText={i.alertText} key={idx} />
                        ))
                    }
                </TabPanel>
                <TabPanel value="4" sx={{ overflow: 'scroll', height: '100%', pt: 0 }} className='alarmbox-tabpanel'>
                    {
                        eventCat.map((i: any, idx: number) => (
                            <AlertItem alertMode={i.alertMode} alertText={i.alertText} key={idx} />
                        ))
                    }
                </TabPanel>
            </TabContext>
        </Box>
    );
}


export default AlarmBox