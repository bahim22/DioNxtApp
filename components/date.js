import { parseISO, format } from 'date-fns'

/*
export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return(
      <time dateTime={dateString}></time>
    )}
*/

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  }

/*
export function ADate ({ dateString }) {
  const date = parseISO(dateString)
  return(
   <div dateTime={'2021, 12, 12'}>{format(Date,'2021, 12, 12', 'MM/dd/yyyy')}</div>
  )
}*/

//const getLocale = (locale) => import(`date-fns/locale/${locale}/index.js`) // or require() if using CommonJS

/*const formatDate = (date, formatStyle, locale) => {
  return format(date, formatStyle, {
    locale: getLocale(locale),
  })
}
*/

//format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")

//const GetTime = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })

//const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')