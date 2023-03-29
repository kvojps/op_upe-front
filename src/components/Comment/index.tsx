import { CommentContainer, CommentContent, CommentHeader, CommentMain } from "./styles";
import { UserCircle } from '@phosphor-icons/react'

export function Comment() {
    const imagePath = 'https://github.com/rafa-souza-dev.png'

    return (
        <CommentContainer>
            <CommentContent>
                <img src={imagePath} alt="" />
                <CommentMain>
                    <CommentHeader>
                        <strong>Rafira Developer <span>em</span> Desafios e inovações no ensino de história no período de pandemia</strong>
                        <p>13 de dezembro de 2021</p>
                    </CommentHeader>
                    <p>Sensacional!</p>
                </CommentMain>
            </CommentContent>
        </CommentContainer>
    )
}
