import { parseISO, format } from 'date-fns'
import { format } from 'date-fns'
import { format } from 'date-fns/esm/locale/en-US'
//import { roundToNearestMinutes } from 'date-fns'
//import { addLocale } from 'date-fns'
//import { roundToNearestMinutes } from 'date-fns'
//import { addLocale } from 'date-fns'*/

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
export function dateNew ({ dateString }) {
  return(
   <div dateTime={dateString}>format(new Date(2021, 12, 12), 'MM/dd/yyyy')</div>
  )
}

//const dateNew = format(new Date, 'MM/dd/yyyy')
/*let willMatch = (
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): boolean
*/
/*isntMatch() => ({ props }: {
    props: any;
}) => <Main>

export default function isMatch({ props }: {
    props: any;
}): {
    render(): any;
    return(any: any, time: any, className?: boolean): true
}


function isMatch() {
    return (
        <div>
            {this.time}
        </div>
    )
}*/

/*export default function isMatch({ props }): {
    render(
        return(
            <time className={ props.newMatch } />
        )
        )
    }

  //export function roundDate roundToNearestMinutes(Date | number, addLocale?: any {nearestTo?: 30});

// localeTime setup ex. 'date-fns/esm/locale/en-US'

/*type Locale = {
    code?: string;
    formatDistance?: (...args: any[]) => any;
    formatRelative?: (...args: any[]) => any;
    localize?: {
        ordinalNumber: (...args: any[]) => any;
        era: (...args: any[]) => any;
        quarter: (...args: any[]) => any;
        month: (...args: any[]) => any;
        day: (...args: any[]) => any;
        dayPeriod: (...args: any[]) => any;
    };
    formatLong?: {
        ...;
    };
    match?: {
        ...;
    };
    options?: {
        ...;
    };
}
*/