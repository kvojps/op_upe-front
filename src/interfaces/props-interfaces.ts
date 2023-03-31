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
