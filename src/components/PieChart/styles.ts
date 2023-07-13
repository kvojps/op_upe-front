import styled from "styled-components";

export const PieChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    @media screen and (max-width: 790px) {
        width: 80%;
        border: 1px solid ${props => props.theme["red-700"]};
        padding: 0.5rem;
        border-radius: 10px;
    }
`
