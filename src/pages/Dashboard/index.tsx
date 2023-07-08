import { DashboardCard, DashboardContainer, DashboardMain, DashboardSummary, PieChartsContainer } from './styles'
import { Books, UsersThree, Buildings, GraduationCap } from '@phosphor-icons/react'
import Chart from 'react-apexcharts'
import { PieChart } from '../../components/PieChart'
import { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'
import { client } from '../../client/client'
import { Loader } from '../../components/Loader'

type DashboardData = {
  totalCourses: number;
  totalCampuses: number;
  totalProjects: number;
  totalUsers: number;

  projectsPerCourses: object;
  projectsPerCampuses: object;
  projectsPerModalities: object;
  projectsPerThematicArea: object;
}

export function Dashboard() {
    const [dashboardData, setDashboardData] = useState<DashboardData>({
      projectsPerCampuses: {},
      projectsPerCourses: {},
      projectsPerThematicArea: {},
      projectsPerModalities: {},
      totalCampuses: 0,
      totalCourses: 0,
      totalProjects: 0,
      totalUsers: 0
    })

    const [isLoading, setIsLoading] = useState(true)

    async function getDashboardData() {
        await client
            .get('/dashboard')
            .then(res => {
                const data: DashboardData = res.data

                setDashboardData(data)
                setIsLoading(false)
            })
            .catch(err => {
                // alert(err)
                console.log(err)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getDashboardData()
    }, [])

    const getChartOptions = (categories: string[], title: string) : ApexOptions => ({
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
              text: title,
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

    function getFilteredKeys(object: object) {
      const entries = Object.entries(object)

      const array = entries.filter(entrie => entrie[1] !== 0)

      return array.map(element => element[0])
    }

    function getFilteredValues(object: object) {
      const entries = Object.entries(object)

      const array = entries.filter(entrie => entrie[1] !== 0)

      return array.map(element => element[1])
    }

    if (isLoading) return <Loader />

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
                        <PieChart title='Projetos por Modalidade' labels={getFilteredKeys(dashboardData.projectsPerModalities)} series={getFilteredValues(dashboardData.projectsPerModalities)} />
                        <PieChart title='Projetos por Área Temática' labels={getFilteredKeys(dashboardData.projectsPerThematicArea)} series={getFilteredValues(dashboardData.projectsPerThematicArea)} />
                    </PieChartsContainer>

                    <Chart 
                        options={getChartOptions(getFilteredKeys(dashboardData.projectsPerCourses), 'Projetos por Curso')} 
                        series={[{data: getFilteredValues(dashboardData.projectsPerCourses)}]} 
                        type="bar" 
                        height={800} 
                    />

                    <Chart 
                        options={getChartOptions(getFilteredKeys(dashboardData.projectsPerCampuses), 'Projetos por Campus')} 
                        series={[{data: getFilteredValues(dashboardData.projectsPerCampuses)}]}
                        type="bar"
                        height={480} 
                    />

                </DashboardMain>
            </DashboardContainer>
        </DashboardContainer>
    )
}
