import { category } from "../@types/props"

export interface PieChartProps {
    title: string
    series: number[]
    labels: string[]
}

export interface ProjectProps {
    id: number
    title: string
    category: category
    authorName: string
    imageURL?: string
    introduction: string
    createdAt: Date
}

export interface CommentProps {
    imageURL?: string
    authorName: string
    projectTitle: string
    timeDistanceToNow: string
    text: string
}

export interface PaginatorProps {
    count: number
    page: number
    handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
}
