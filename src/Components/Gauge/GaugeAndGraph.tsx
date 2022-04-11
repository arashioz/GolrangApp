import { Grid } from '@mui/material';
import React from 'react'
import Chart from 'react-apexcharts'
import { Props } from 'react-apexcharts';
import '../../Assets/Styles/gauges.scss'
import Gauge from './Gauge';


const GaugeAndGraph = () => {

    React.useEffect(() => {
        const newChartData = {
            ...chartData.options
        };
        ApexCharts.exec(`market-share-area-chart`, 'updateOptions', newChartData);
    });
    const chartData: Props = {
        height: 180,
        // width: 460,
        type: 'area',
        stacked: true,
        options: {
            chart: {
                id: 'market-share-area-chart',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                },
                sparkline: {
                    enabled: true
                }
            },
            tooltip: {
                fillSeriesColor: true,
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            fill: {
                type: 'gradient',
                gradient: {
                    // shadeIntensity: 0.5,
                    // opacityFrom: 1,
                    // opacityTo: 0.5,
                    // stops: [0, 50, 100]
                    opacityFrom: 0.6,
                    opacityTo: 0.8,
                }
            },
            legend: {
                show: true
            },
            grid: {
                position: 'back',
                show: true,
                row: {
                    colors: ['transparent'],
                    opacity: 0.2
                }
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
            }
        },
        series: [
            {
                name: 'series1',
                data: [40, 62, 26, 23, 71, 96, 56]
            },
            {
                name: 'series2',
                data: [45, 6, 80, 65, 28, 68, 68]
            },


        ]
    };
    return (
        <>
            <Grid container justifyContent='space-between' className='gaugeGraph-container'>
                <Gauge gaugeName={'logger'} gaugeData={12} noneBack />
                <Grid item md={8}>
                    <Chart {...chartData} />
                </Grid>

            </Grid>
        </>



    )
}

export default GaugeAndGraph