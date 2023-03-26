import Chart from 'react-apexcharts'

export function Dashboard() {
    return (
        <div>
            <Chart 
                series={[44, 55, 13, 43, 22]}
                options={{
                    chart: {
                        width: 380,
                        type: 'pie',
                      },
                      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
                width={380}
            />
        </div>
    )
}
