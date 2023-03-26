import { DashboardCard, DashboardContainer, DashboardMain, DashboardSummary, PieChartsContainer } from './styles'
import { Books, UsersThree } from '@phosphor-icons/react'
import Chart from 'react-apexcharts'
import { PieChart } from '../../components/PieChart'
import { ApexOptions } from 'apexcharts'

const fakePieChartProps = {
    series: [10, 20, 14],
    labels: ['Programa', 'Evento', 'Oficina']
}

const options: ApexOptions = {
    chart: {
        type: 'bar',
        height: 380
    },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom'
          },
        }
      },
      colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
        '#f48024', '#69d2e7'
      ],
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff']
        },
        formatter: function (val: any, opt: any) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'India'
        ],
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
          text: 'Custom DataLabels',
          align: 'center',
          floating: true
      },
      subtitle: {
          text: 'Category Names as DataLabels inside bars',
          align: 'center',
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function () {
              return ''
            }
          }
        }
      }
}

export function Dashboard() {
    return (
        <DashboardContainer>
            <DashboardContainer>
                <DashboardMain>
                    <DashboardSummary>
                        <DashboardCard>
                            <h1>Campus</h1>
                            <UsersThree size={64} />
                            <span>100</span>
                        </DashboardCard>
                        <DashboardCard>
                            <h1>Cursos</h1>
                            <Books size={64} />
                            <span>1000</span>
                        </DashboardCard>
                        <DashboardCard>
                            <h1>Projetos</h1>
                            <UsersThree size={64} />
                            <span>100</span>
                        </DashboardCard>
                        <DashboardCard>
                            <h1>Usuários</h1>
                            <UsersThree size={64} />
                            <span>100</span>
                        </DashboardCard>
                    </DashboardSummary>

                    <PieChartsContainer>
                        <PieChart title='Projetos por Modalidade' labels={fakePieChartProps.labels} series={fakePieChartProps.series} />
                        <PieChart title='Projetos por Área Temática' labels={fakePieChartProps.labels} series={fakePieChartProps.series} />
                        <PieChart title='Projetos por Campus' labels={fakePieChartProps.labels} series={fakePieChartProps.series} />
                    </PieChartsContainer>

                    <Chart options={options} series={[{
              data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }]} type="bar" height={380} />

                </DashboardMain>
            </DashboardContainer>
        </DashboardContainer>
    )
}
