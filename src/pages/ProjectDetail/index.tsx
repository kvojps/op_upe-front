import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectDetailContainer, ProjectDetailContent, ProjectDetailDataList, ProjectDetailHeader, ProjectDetailHeaderInfo, ProjectDetailHeaderSummary, ProjectDetailMain } from './styles'
import { ArrowCircleLeft } from '@phosphor-icons/react'
import inovacao from '../../assets/inovacao.jpeg'

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>()

    return (
        <ProjectDetailContainer>
            <ProjectDetailContent>
                <ProjectDetailHeader>
                    <ProjectDetailHeaderInfo>
                        <button>
                            <ArrowCircleLeft size={24} />
                            <p>Voltar</p>
                        </button>
                        <h1>Identificação in silico de potenciais inibidores de IL-5 da Schinopsis brasiliensis Engl</h1>
                        <span>PESQUISA</span>
                        <div>
                            <p>By Bruno Cipriano Minhaqui da Silva</p>
                            <p>1 de fevereiro de 2022</p>
                        </div>
                    </ProjectDetailHeaderInfo>
                    <ProjectDetailHeaderSummary>
                        <li>
                            <strong>Modalidade:</strong>
                            <span>PROGRAMA</span>
                        </li>
                        <li>
                            <strong>Ano de Início:</strong>
                            <span>01/09/2021</span>
                        </li>
                    </ProjectDetailHeaderSummary>
                </ProjectDetailHeader>
                <ProjectDetailMain>
                    <img src={inovacao} alt="" />
                    <ProjectDetailDataList>
                        <li>
                            <h2>Resumo</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta provident nobis nostrum eos dolorum, pariatur debitis tempore inventore dicta optio mollitia, quisquam et incidunt tempora fuga! Odit, harum libero!</p>
                        </li>
                        <li>
                            <h2>Introdução</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae soluta provident nobis nostrum eos dolorum, pariatur debitis tempore inventore dicta optio mollitia, quisquam et incidunt tempora fuga! Odit, harum libero!</p>
                        </li>
                    </ProjectDetailDataList>
                </ProjectDetailMain>
            </ProjectDetailContent>
        </ProjectDetailContainer>
    )
}
