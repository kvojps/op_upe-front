import { Comment } from "../../components/Comment";
import { Project } from "../../components/Project";
import { ProjectsAside, ProjectsContainer, ProjectsContent, ProjectsMain } from "./styles";

export function Projects() {
    return (
        <ProjectsContainer>
            <ProjectsContent>
                <ProjectsAside>
                    <form action="">
                        <input type="text" />
                        <button type="submit">Pesquisar</button>
                    </form>
                    <span>Categorias</span>
                    <ul>
                        <li>Extensão</li>
                        <li>Pesquisa</li>
                    </ul>
                    <span>Posts Recentes</span>
                    <ul>
                        <li>Desafios e inovações no ensino de história no período de pandemia</li>
                        <li>FATORES DE REINCIDÊNCIA DE GARDNERELLA VAGINALIS</li>
                    </ul>
                    <span>Comentários recentes</span>
                    <ul>
                        <li>
                            <Comment />
                        </li>
                        <li>
                            <Comment />
                        </li>
                        <li>
                            <Comment />
                        </li>
                    </ul>
                </ProjectsAside>
                <ProjectsMain>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </ProjectsMain>
            </ProjectsContent>
        </ProjectsContainer>
    )
}
