import { ProjectContainer, ProjectContent, ProjectFooter, ProjectHeader, ProjectMain } from "./styles";
import { ArrowRight } from '@phosphor-icons/react'

export function Project() {
    return (
        <ProjectContainer>
            <ProjectContent>
                <ProjectHeader>
                    <h1>Desafios e inovações no ensino de história no período de pandemia</h1>
                    <span>EXTENSÃO</span>
                    <div>
                        <p>By Rafira Developer</p>
                        <p>2 de setembro de 2021</p>
                    </div>
                </ProjectHeader>
                <ProjectMain>
                    <img src="https://static.vecteezy.com/ti/fotos-gratis/p2/819707-paisagem-bonita-foto.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam ipsum! Deleniti sit mollitia facilis, molestias animi quaerat hic accusamus tenetur corporis tempore pariatur reprehenderit nesciunt officia voluptates suscipit quae.</p>
                </ProjectMain>
                <ProjectFooter>
                    <button>
                        <strong>READ MORE</strong>
                        <ArrowRight size={32} />
                    </button>
                </ProjectFooter>
            </ProjectContent>
        </ProjectContainer>
    )
}
