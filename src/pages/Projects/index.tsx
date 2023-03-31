import { Comment } from "../../components/Comment";
import { Paginator } from "../../components/mui/Paginator";
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
                    <ul className="projects-list">
                        <li>
                            <Project />
                        </li>
                        <li>
                            <Project />
                        </li>
                        <li>
                            <Project />
                        </li>
                    </ul>
                    <Paginator />
                </ProjectsMain>
            </ProjectsContent>
        </ProjectsContainer>
    )
}
