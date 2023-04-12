import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectDetailContainer, ProjectDetailContent, ProjectDetailDataList, ProjectDetailHeader, ProjectDetailHeaderInfo, ProjectDetailHeaderSummary, ProjectDetailMain } from './styles'
import { ArrowCircleLeft } from '@phosphor-icons/react'
import inovacao from '../../assets/inovacao.jpeg'
import { category, modality } from '../../@types/props'
import { client } from '../../client/client'
import { Loader } from '../../components/Loader'
import { convertDateFormatToYearMonthDay, convertDateToBRFormat } from '../../utils/formate-date'

type ProjectDetailData = {
    id: number
    titulo: string
    areaTematica: category
    modalidade: modality
    autor: string
    conclusao: string
    cursoProjetos: Array<{ id: number }>
    dataFim: number
    dataInicio: number
    fundamentacao: string
    introducao: string
    memoriaVisual: string
    objetivos: string
    pessoasAtendidas: number
    publicoAlvo: string
    resumo: string
    suporteFinanceiro: number
}

export function ProjectDetail() {
    const [projectDetailData, setProjectDetailData] = useState<ProjectDetailData>({
        id: 0,
        areaTematica: 'EXTENSAO',
        autor: '',
        conclusao: '',
        cursoProjetos: [ { id: 0 } ],
        dataFim: 1587427200000,
        dataInicio: 1587427200000,
        fundamentacao: '',
        introducao: '',
        memoriaVisual: '',
        modalidade: 'CURSO',
        objetivos: '',
        pessoasAtendidas: 0,
        publicoAlvo: '',
        resumo: '',
        suporteFinanceiro: 0,
        titulo: ''
    })
    const [isLoadingProjectDetailRequest, setIsLoadingProjectDetailRequest] = useState(true)

    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    async function fetchProjectDetail() {
        await client
            .get('/projeto/' + id)
            .then(res => {
                const data: ProjectDetailData = res.data

                setProjectDetailData(data)
                setIsLoadingProjectDetailRequest(false)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        fetchProjectDetail()
    }, [])

    const initialProjectDatePTBR = convertDateToBRFormat(new Date(projectDetailData.dataInicio))
    const formattedInitialDate = convertDateFormatToYearMonthDay(new Date(projectDetailData.dataInicio))
    const formattedFinalDate = convertDateFormatToYearMonthDay(new Date(projectDetailData.dataFim))

    const {
        areaTematica,
        autor,
        cursoProjetos,
        dataFim,
        dataInicio,
        id: projectId,
        modalidade,
        titulo,
        ...listableInfoObject
    } = projectDetailData

    const listableInfo = [
        {   id: 1,
            'Resumo': listableInfoObject.resumo,
        },
        {   id: 2,
            'Introdução': listableInfoObject.introducao,
        },
        {   id: 3,
            'Objetivos': listableInfoObject.objetivos,
        },
        {   id: 4,
            'Fundamentação': listableInfoObject.fundamentacao,
        },
        {   id: 5,
            'Publico Alvo Atendido': listableInfoObject.publicoAlvo,
        },
        {   id: 6,
            'Suporte Financeiro': listableInfoObject.suporteFinanceiro !== 0 ? listableInfoObject.suporteFinanceiro : 'Não há.',
        },
        {   id: 7,
            'Conclusão': listableInfoObject.conclusao,
        },
        {   id: 8,
            'Link de Acesso': listableInfoObject.memoriaVisual !== '' ? listableInfoObject.memoriaVisual : 'Não há.',
        },
    ]

    if (isLoadingProjectDetailRequest) return <Loader />;

    return (
        <ProjectDetailContainer>
            <ProjectDetailContent>
                <ProjectDetailHeader>
                    <ProjectDetailHeaderInfo>
                        <button onClick={() => navigate('/projetos')}>
                            <ArrowCircleLeft size={24} />
                            <p>Voltar</p>
                        </button>
                        <h1>{projectDetailData.titulo}</h1>
                        <span>{projectDetailData.areaTematica}</span>
                        <div>
                            <p>{`By ${projectDetailData.autor}`}</p>
                            <p>{initialProjectDatePTBR}</p>
                        </div>
                    </ProjectDetailHeaderInfo>
                    <ProjectDetailHeaderSummary>
                        <li>
                            <strong>Modalidade:</strong>
                            <span>{projectDetailData.modalidade}</span>
                        </li>
                        <li>
                            <strong>Data de Início:</strong>
                            <span>{formattedInitialDate}</span>
                        </li>
                        <li>
                            <strong>Data de finalização:</strong>
                            <span>{formattedFinalDate}</span>
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
                        {
                            listableInfo.map(info => {
                                const { id, ...rest } = info

                                const entries = Object.entries(rest)

                                console.log(entries)

                                return (
                                    <li key={info.id}>
                                        <h2>{entries[0][0]}</h2>
                                        <p>
                                            {
                                                entries[0][0] === 'Link de Acesso' ?
                                                <p>
                                                    <a 
                                                        href={entries[0][1]}
                                                        target={'_blank'}
                                                    >
                                                        {entries[0][1]}
                                                    </a>
                                                </p>
                                                :
                                                <p>{entries[0][1]}</p>
                                            }
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ProjectDetailDataList>
                </ProjectDetailMain>
            </ProjectDetailContent>
        </ProjectDetailContainer>
    )
}
