import { parseISO, format } from 'date-fns'
export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime = { dateString } > { format(12232021, 'LLLL	d, yyyy') } </time>
}