import { Comment } from "../../components/Comment";
import { Paginator } from "../../components/mui/Paginator";
import { Project } from "../../components/Project";
import { getTimeDifferenceFromNowPTBR } from "../../utils/formate-date";
import { ProjectsAside, ProjectsContainer, ProjectsContent, ProjectsFilterBox, ProjectsFilterDateForm, ProjectsMain } from "./styles";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormEvent, useEffect, useState } from "react";
import { category } from "../../@types/props"
import { client } from "../../client/client";
import { Loader } from "../../components/Loader";
import { Dayjs } from 'dayjs';
import { XCircle } from "@phosphor-icons/react";

type ProjectData = {
    id: number
    titulo: string
    areaTematica: category
    autor: string
    imagemUrl?: string
    introducao: string
    dataInicio: Date
}

type ProjectResponse = {
    projetos: ProjectData[]
    totalPaginas: number
    totalItens: number
    paginaAtual: number
}

type ProjectsFilterDTO = {
    title?: string,
    areaTematica?: string,
    dataFim?: string,
    dataInicio?: string,
    modalidade?: string,
    page?: number,
    size: number
}

export function Projects() {
    const [isFormDisabled, setIsFormDisabled] = useState(true)
    const [projectsData, setProjectsData] = useState<ProjectResponse>({
        projetos: [],
        paginaAtual: 0,
        totalItens: 0,
        totalPaginas: 0
    })
    const [isLoadingProjectsRequest, setIsLoadingProjectsRequest] = useState(true)
    const [titleValue, setTitleValue] = useState('')
    const [initialDateValue, setInicialDateValue] = useState<Dayjs | null>(null);
    const [finalDateValue, setFinalDateValue] = useState<Dayjs | null>(null);
    const [projectFilterDTO, setProjectFilterDTO] = useState<ProjectsFilterDTO>({
        size: 5,
        page: 0
    })
    const [projectsPage, setProjectsPage] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedModality, setSelectedModality] = useState("")

    function incrementProjectsFilterUrl(projectFilterDTO: ProjectsFilterDTO) {
        let url = '/projeto/filtro'

        const entries = Object.entries(projectFilterDTO)

        if (entries.length > 0) {
            url += '?'
        }

        entries.forEach(entrie => {
            if (
                entrie[1] !== '' && 
                entrie[1] !== 0 &&
                entrie[1] !== undefined
            ) {
                url += `${entrie[0]}=${entrie[1]}&`
            }
        })

        if (url.endsWith('&')) {
            url = url.slice(0, url.length - 1)
        }

        return url
    }

    async function fetchProjects(url: string) {
        setIsLoadingProjectsRequest(true)
        setIsFormDisabled(true)

        await client
            .get(url)
            .then(res => {
                const data: ProjectResponse = res.data

                setProjectsData(data)

                if (data.totalPaginas < projectsPage) {
                    setProjectsPage(1)

                    setProjectFilterDTO(state => ({
                        ...state,
                        page: 0
                    }))
                }

                setIsLoadingProjectsRequest(false)
                setIsFormDisabled(false)
            })
            .catch(err => {
                setIsLoadingProjectsRequest(false)
                setIsFormDisabled(false)
                console.log(err)
            })
    }

    useEffect(() => {
        const url = incrementProjectsFilterUrl(projectFilterDTO)

        fetchProjects(url)
    }, [projectFilterDTO])

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }, [projectsPage, isFormDisabled])

    function validateDayjsDate(date: Dayjs | null): boolean {
        const result = date?.format('DD-MM-YYYY')

        if (result !== 'Invalid Date' && result !== undefined) {
            return true
        }

        return false
    }

    function handleSubmitFilterDate(event: FormEvent) {
        event.preventDefault();

        const formattedInitialDate = initialDateValue?.format('DD-MM-YYYY')
        const formattedFinalDate = finalDateValue?.format('DD-MM-YYYY')

        setProjectFilterDTO(state => ({
            ...state,
            dataInicio: formattedInitialDate,
            dataFim: formattedFinalDate
        }))
    }

    function handleSubmitTitleFilterForm(event: FormEvent) {
        event.preventDefault();

        setProjectFilterDTO(state => ({
            ...state,
            title: titleValue
        }))
    }

    function handleChangeSelectedCategory(category: string) {
        setProjectFilterDTO(state => ({
            ...state,
            areaTematica: category
        }))
    }

    function handleChangeSelectedModality(modality: string) {
        setProjectFilterDTO(state => ({
            ...state,
            modalidade: modality
        }))
    }

    function handleChangePage(_: React.ChangeEvent<unknown>, value: number) {
        setProjectsPage(value)

        setProjectFilterDTO(state => ({
            ...state,
            page: value - 1
        }))
    }

    function handleRemoveFilters() {
        setTitleValue('')
        setSelectedCategory('')
        setSelectedModality('')
        setInicialDateValue(null)
        setFinalDateValue(null)

        setProjectFilterDTO(state => ({
            size: 5,
            page: state.page
        }))
    }

    const dateInputHasInvalidDate = !validateDayjsDate(initialDateValue) ||
        !validateDayjsDate(finalDateValue)

    const isProjectFilterDTOEmpty = Object.values(projectFilterDTO).length === 2

    return (
        <ProjectsContainer>
            <ProjectsContent>
                <ProjectsAside>
                    <ProjectsFilterBox>
                        <form
                            onSubmit={handleSubmitTitleFilterForm}
                            action="" 
                            className="title-filter-form"
                        >
                            <div>
                                <input
                                    disabled={isFormDisabled}
                                    type="text" 
                                    placeholder="Escreva um título..."
                                    value={titleValue}
                                    onChange={(e) => setTitleValue(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    disabled={titleValue === '' || isFormDisabled ? true : false}
                                >
                                    Pesquisar
                                </button>
                            </div>
                            {
                                !isProjectFilterDTOEmpty &&
                                <button
                                    type="button"
                                    onClick={handleRemoveFilters}
                                    disabled={isFormDisabled}
                                >
                                    <p>Remover Filtros</p>
                                    <XCircle />
                                </button>
                            }
                        </form>
                        <select
                            value={selectedCategory}
                            onChange={(e) => {
                                setSelectedCategory(e.target.value)
                                handleChangeSelectedCategory(e.target.value)
                            }}
                            disabled={isFormDisabled} 
                            name="select-categories" 
                            id="select-categories"
                        >
                            <option value="">Escolha uma Categoria</option>
                            <option value="EXTENSAO">Extensão</option>
                            <option value="INOVACAO">Inovação</option>
                            <option value="PESQUISA">Pesquisa</option>
                        </select>
                        <select
                            value={selectedModality}
                            onChange={(e) => {
                                setSelectedModality(e.target.value)
                                handleChangeSelectedModality(e.target.value)
                            }}
                            disabled={isFormDisabled} 
                            name="select-modalities" 
                            id="select-modalities"
                        >
                            <option value="">Escolha uma Modalidade</option>
                            <option value="PROGRAMA">Programa</option>
                            <option value="PROJETO">Projeto</option>
                            <option value="CURSO">Curso</option>
                            <option value="OFICINA">Oficina</option>
                            <option value="EVENTO">Evento</option>
                        </select>
                        <ProjectsFilterDateForm onSubmit={handleSubmitFilterDate}>
                            <h4>Filtre por Data</h4>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        disabled={isFormDisabled}
                                        format="DD / MM / YYYY" 
                                        label="Data Inicial" 
                                        sx={{ width: "100%" }}
                                        value={initialDateValue}
                                        onChange={(dateObject) => setInicialDateValue(dateObject)}
                                    />
                                </DemoContainer>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        disabled={isFormDisabled}
                                        format="DD / MM / YYYY" 
                                        label="Data Final" 
                                        sx={{ width: "100%" }}
                                        value={finalDateValue}
                                        onChange={(dateObject) => setFinalDateValue(dateObject)}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <button 
                                disabled={dateInputHasInvalidDate || isFormDisabled} 
                                className="filter-date-button" 
                                type="submit"
                            >
                                Filtrar
                            </button>
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
                    {
                        isLoadingProjectsRequest && 
                        isProjectFilterDTOEmpty &&
                        projectsData.projetos.length === 0 ?
                        <Loader />
                        :
                        <>
                            <ul aria-disabled={isLoadingProjectsRequest} className="projects-list">
                            {
                                projectsData.projetos.map(project => (
                                    <li key={project.id}>
                                        <Project 
                                            id={project.id}
                                            authorName={project.autor}
                                            category={project.areaTematica}
                                            createdAt={new Date(project.dataInicio)}
                                            introduction={project.introducao}
                                            title={project.titulo}
                                        />
                                    </li>
                                ))
                            }
                            </ul>
                            <Paginator
                                disabled={isFormDisabled}
                                page={projectsPage} 
                                count={projectsData.totalPaginas} 
                                handleChange={handleChangePage} 
                            />
                        </>
                    }
                </ProjectsMain>
            </ProjectsContent>
        </ProjectsContainer>
    )
}
