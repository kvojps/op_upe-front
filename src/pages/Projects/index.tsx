import { Comment } from "../../components/Comment";
import { Paginator } from "../../components/mui/Paginator";
import { Project } from "../../components/Project";
import { convertDateFormatToYearMonthDay, getTimeDifferenceFromNowPTBR } from "../../utils/formate-date";
import { ProjectsAside, ProjectsContainer, ProjectsContent, ProjectsFilterBox, ProjectsFilterDateForm, ProjectsMain } from "./styles";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from "react";
import { category, modalities } from "../../@types/props"
import { client } from "../../client/client";

export function Projects() {
    const [projects, setProjects] = useState<Project[]>([])

    type Project = {
        id: number
        titulo: string
        areaTematica: category
        autor: string
        imagemUrl?: string
        introducao: string
        dataInicio: Date
    }

    type ProjectsFilterDTO = {
        title?: string,
        areaTematica?: category,
        dataFim?: string,
        dataInicio?: string,
        modalidade?: modalities,
        page?: number,
        size?: number
    }

    function incrementProjectsFilterUrl(filterDTO: ProjectsFilterDTO) {
        let url = '/projeto/filtro'

        const entries = Object.entries(filterDTO)

        if (entries.length > 0) {
            url += '?'
        }

        entries.forEach(entrie => {
            url += `${entrie[0]}=${entrie[1]}&`
        })

        if (url.endsWith('&')) {
            url = url.slice(0, url.length - 1)
        }

        return url
    }

    async function fetchProjects(filterDTO: ProjectsFilterDTO) {
        const url = incrementProjectsFilterUrl(filterDTO)

        await client
            .get(url)
            .then(res => {
                const data: Project[] = res.data

                setProjects(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchProjects({
            areaTematica: 'EXTENSAO',
            // dataFim: convertDateFormatToYearMonthDay(new Date()),
            // dataInicio: convertDateFormatToYearMonthDay(new Date()),
            modalidade: 'CURSO',
            page: 10,
            size: 15,
            title: 'Teste'
        })
    }, [])

    console.log(projects)

    return (
        <ProjectsContainer>
            <ProjectsContent>
                <ProjectsAside>
                    <ProjectsFilterBox>
                        <form action="" className="title-filter-form">
                            <input type="text" placeholder="Escreva um título..." />
                            <button type="submit">Pesquisar</button>
                        </form>
                        <select name="select-categories" id="select-categories">
                            <option value="">Escolha uma Categoria</option>
                            <option value="EXTENSAO">Extensão</option>
                            <option value="INOVACAO">Inovação</option>
                            <option value="PESQUISA">Pesquisa</option>
                        </select>
                        <select name="select-modalities" id="select-modalities">
                            <option value="">Escolha uma Modalidade</option>
                            <option value="PROGRAMA">Programa</option>
                            <option value="PROJETO">Projeto</option>
                            <option value="CURSO">Curso</option>
                            <option value="OFICINA">Oficina</option>
                            <option value="EVENTO">Evento</option>
                        </select>
                        <ProjectsFilterDateForm>
                            <h4>Filtre por Data</h4>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker format="DD / MM / YYYY" label="Data Inicial" sx={{ width: "100%" }} />
                                </DemoContainer>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker format="DD / MM / YYYY" label="Data Final" sx={{ width: "100%" }} />
                                </DemoContainer>
                            </LocalizationProvider>
                            <button className="filter-date-button">Filtrar</button>
                        </ProjectsFilterDateForm>
                    </ProjectsFilterBox>
                    <span>Posts Recentes</span>
                    <ul>
                        <li>Desafios e inovações no ensino de história no período de pandemia</li>
                        <li>FATORES DE REINCIDÊNCIA DE GARDNERELLA VAGINALIS</li>
                    </ul>
                    <span>Comentários recentes</span>
                    <ul>
                        <li>
                            <Comment
                                key={1}
                                authorName="Rafira Developer"
                                projectTitle="Projetinho publicado"
                                text="Unbelievable!"
                                timeDistanceToNow={getTimeDifferenceFromNowPTBR(new Date())}
                                imageURL="https://github.com/rafa-souza-dev.png"
                            />
                        </li>
                    </ul>
                </ProjectsAside>
                <ProjectsMain>
                    <ul className="projects-list">
                        <li>
                            <Project 
                                id={1}
                                authorName="Rafira Developer"
                                category="PESQUISA"
                                createdAt={new Date()}
                                introduction={"Introdução .... .. . . . pontinhos"}
                                title="Título inútil por enquanto"
                                key={1}
                            />
                        </li>
                    </ul>
                    <Paginator />
                </ProjectsMain>
            </ProjectsContent>
        </ProjectsContainer>
    )
}
