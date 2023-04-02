import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function convertDateToBRFormat(date: Date) {
    const formattedDate = format(date, "d 'de' MMMM 'de' yyyy", {
        locale: ptBR
    })

    return formattedDate
}

export function getTimeDifferenceFromNowPTBR(date: Date) {
    const time = formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true
    })

    return time
}

export function convertDateFormatToYearMonthDay(date: Date) {
    const formattedDate = format(date, 'yyyy-MM-dd')

    return formattedDate
}
