import styled from "styled-components";

export const ContactContainer = styled.div`
    margin: 4rem 8rem;
    max-width: 70vw;
`

export const ContactContent = styled.div`
 display: flex;
 margin-top: 3rem;
 margin-left: 5rem;
 width: 70vw;
`

export const ContactContentForm = styled.form`
    display: grid;
    columns: auto;
    width: 70vw;
    margin-right: 2rem;
`

export const ContactContentH2 = styled.h2`
    font-size: 32px;
`

export const ContactContentH3 = styled.h3`
    color: #dd6b20;
`

export const ContactContentInput = styled.input`
    margin: 6px;
    border-bottom: solid 1px #000000;

`

export const ContactContentInputTextarea = styled.textarea`
    margin: 6px;
    border: solid 1px #000000;
    height: 15vh;
`

export const ContactContentButton = styled.button`
    background-color: #dd6b20;
    color: #FFFFFF;
    width: 10vw;
    margin-top: 1rem;
    padding: 10px;
    border-radius: 10px;
    :hover {
        background-color: #c7601d;
        transition: linear 0.4s;
    }

    :disabled {
        background-color: #e27935;
    }
`