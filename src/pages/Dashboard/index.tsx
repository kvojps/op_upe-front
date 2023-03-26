import { DashboardCard, DashboardContainer, DashboardMain, DashboardSummary, PieChartsContainer } from './styles'
import { Books, UsersThree, Buildings, GraduationCap } from '@phosphor-icons/react'
import Chart from 'react-apexcharts'
import { PieChart } from '../../components/PieChart'
import { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'
import { client } from '../../client/client'

export function Dashboard() {
    const [dashboardData, setDashboardData] = useState<DashboardData>({
        campuses: {},
        courses: {},
        thematicArea: {},
        modalities: {},
        totalCampuses: 0,
        totalCourses: 0,
        totalProjects: 0,
        totalUsers: 0
    })

    type DashboardData = {
        totalCourses: number;
        totalCampuses: number;
        totalProjects: number;
        totalUsers: number;

        courses: object;
        campuses: object;
        modalities: object;
        thematicArea: object;
    }

    async function getDashboardData() {
        await client
            .get('/dashboard')
            .then(res => {

                console.log(res.data)
                
                const data: DashboardData = res.data

                setDashboardData(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDashboardData()
    }, [])

    const getChartOptions = (categories: string[]) : ApexOptions => ({
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
            categories: categories
          },
          yaxis: {
            labels: {
              show: false
            }
          },
          title: {
              text: 'Projetos por Curso',
              align: 'center',
              floating: true
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
    })

    return (
        <DashboardContainer>
            <DashboardContainer>
                <DashboardMain>
                    <DashboardSummary>
                        <DashboardCard>
                            <h1>Campus</h1>
                            <Buildings size={64} />
                            <span>{dashboardData.totalCampuses}</span>
                        </DashboardCard>
                        <DashboardCard>
                            <h1>Cursos</h1>
                            <GraduationCap size={64} />
                            <span>{dashboardData.totalCourses}</span>
                        </DashboardCard>
                        <DashboardCard>
                            <h1>Projetos</h1>
                            <Books size={64} />
                            <span>{dashboardData.totalProjects}</span>
                        </DashboardCard>
                        <DashboardCard>
                            <h1>Usuários</h1>
                            <UsersThree size={64} />
                            <span>{dashboardData.totalUsers}</span>
                        </DashboardCard>
                    </DashboardSummary>

                    <PieChartsContainer>
                        <PieChart title='Projetos por Modalidade' labels={Object.keys(dashboardData.modalities)} series={Object.values(dashboardData.modalities)} />
                        <PieChart title='Projetos por Área Temática' labels={Object.keys(dashboardData.thematicArea)} series={Object.values(dashboardData.thematicArea)} />
                        <PieChart title='Projetos por Campus' labels={Object.keys(dashboardData.campuses)} series={Object.values(dashboardData.campuses)} />
                    </PieChartsContainer>

                    <Chart 
                        options={getChartOptions(Object.keys(dashboardData.courses))} 
                        series={[{data: Object.values(dashboardData.courses)}]} 
                        type="bar" 
                        height={380} 
                    />

                </DashboardMain>
            </DashboardContainer>
        </DashboardContainer>
    )
}
