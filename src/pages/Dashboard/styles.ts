import styled from "styled-components";

export const DashboardContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
`

export const DashboardContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const DashboardMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

export const DashboardSummary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    flex-wrap: wrap;
`

export const DashboardCard = styled.div`
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${props => props.theme["gray-400"]};
    border-radius: 15px;
    padding: 1rem;
    gap: 1rem;

    span {
        font-weight: bold;
        color: ${props => props.theme["red-500"]};
    }

    h1 {
        color: ${props => props.theme.blue};
    }

    svg {
        color: ${props => props.theme.blue};
    }

    @media screen and (max-width: 949px) {
        width: 6rem;

        h1 {
            font-size: 1rem;
        }
    }
`

export const PieChartsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
