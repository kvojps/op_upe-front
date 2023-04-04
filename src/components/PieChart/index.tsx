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
                        width: 420,
                        type: 'pie',
                    },
                    labels: labels,
                    responsive: [{
                        breakpoint: 520,
                        options: {
                            chart: {
                                width: 300
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                }}
                    type="pie" 
                    width={420}
            />
        </PieChartContainer>
    )
}