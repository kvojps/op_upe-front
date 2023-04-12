import { ProjectContainer, ProjectContent, ProjectFooter, ProjectHeader, ProjectMain } from "./styles";
import { ArrowRight } from '@phosphor-icons/react'
import { ProjectProps } from "../../interfaces/props-interfaces";
import { category } from "../../@types/props";
import { useNavigate } from "react-router-dom";
import inovacao from '../../assets/inovacao.jpeg'
import extensao from '../../assets/extensao.jpeg'
import pesquisa from '../../assets/pesquisa.jpeg'
import { convertDateToBRFormat } from "../../utils/formate-date";

export function Project({
    title,
    authorName,
    category,
    createdAt,
    introduction,
    id,
    imageURL
}: ProjectProps) {
    const navigate = useNavigate()

    function getCategoryDefaultValues(category: category) {
        switch (category) {
            case "EXTENSAO":
                return {
                    category: "EXTENSÃO",
                    imageURL: extensao
                }
            case "INOVACAO":
                return {
                    category: "INOVAÇÃO",
                    imageURL: inovacao
                }
            case "PESQUISA":
                return {
                    category: "PESQUISA",
                    imageURL: pesquisa
                }
        }
    }

    const categoryDefaultValues = getCategoryDefaultValues(category)
    const selectedImageURL = imageURL ?? categoryDefaultValues.imageURL
    const formattedDate = convertDateToBRFormat(createdAt)

    return (
        <ProjectContainer>
            <ProjectContent>
                <ProjectHeader>
                    <h1>{title}</h1>
                    <span>{categoryDefaultValues.category}</span>
                    <div>
                        <p>By {authorName}</p>
                        <p>{formattedDate}</p>
                    </div>
                </ProjectHeader>
                <ProjectMain>
                    <img src={selectedImageURL} alt="" />
                    <p>{introduction}</p>
                </ProjectMain>
                <ProjectFooter>
                    <button onClick={() => navigate(`/projetos/${id}`)}>
                        <strong>LEIA MAIS</strong>
                        <ArrowRight size={32} />
                    </button>
                </ProjectFooter>
            </ProjectContent>
        </ProjectContainer>
    )
}
