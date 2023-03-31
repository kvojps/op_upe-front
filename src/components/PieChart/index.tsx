import Chart from 'react-apexcharts'
import { PieChartProps } from '../../interfaces/props-interfaces'
import { PieChartContainer } from './styles'

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