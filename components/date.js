import { parseISO, format } from 'date-fns'

/*
export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return(
      <time dateTime={dateString}></time>
    )}
*/

/*export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}*/
export function Date ({ dateString }) {
  return(
   <div dateTime={'2021, 12, 12'}>{format(Date('2014, 1, 11'), 'MM/dd/yyyy')}</div>
  )
}
