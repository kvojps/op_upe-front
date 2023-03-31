import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function convertDateToBRFormat(date: Date) {
    const formattedDate = format(date, "d 'de' MMMM 'de' yyyy", {
        locale: ptBR
    })

    return formattedDate
}
