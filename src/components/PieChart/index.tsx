import Chart from 'react-apexcharts'
import { PieChartContainer } from './styles'

interface PieChartProps {
    title: string
    series: number[]
    labels: string[]
}

export function PieChart({ title, series, labels }: PieChartProps) {
    return (
        <PieChartContainer>
            <h3>{title}</h3>
            <Chart 
                series={series}
                options={{
                    chart: {
                        width: 380,
                        type: 'pie',
                    },
                    labels: labels,
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                }}
                    type="pie" 
                    width={350}
            />
        </PieChartContainer>
    )
}