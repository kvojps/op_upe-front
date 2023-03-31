import { CommentContainer, CommentContent, CommentHeader, CommentMain } from "./styles";
import userCircle from '../../assets/user_circle.svg'
import { CommentProps } from "../../interfaces/props-interfaces";

export function Comment({
    authorName,
    timeDistanceToNow,
    projectTitle,
    text,
    imageURL,
}: CommentProps) {
    const selectedImage = imageURL ?? userCircle

    return (
        <CommentContainer>
            <CommentContent>
                <img src={selectedImage} alt="" />
                <CommentMain>
                    <CommentHeader>
                        <strong>{authorName} <span>em</span> {projectTitle}</strong>
                        <p>{timeDistanceToNow}</p>
                    </CommentHeader>
                    <p>{text}</p>
                </CommentMain>
            </CommentContent>
        </CommentContainer>
    )
}
