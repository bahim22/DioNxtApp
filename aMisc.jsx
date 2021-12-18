/*
git remote add origin https://github.com/<username>/nextjs-blog.git
git push -u origin main
## NOTES AND DOCU FOR NEXT BUILD
DATE INFO
// import { parseISO } from 'date-fns'
// Convert string '2014-02-11T11:30:30' to date:
var result = parseISO('2014-02-11T11:30:30')
//=> Tue Feb 11 2014 11:30:30
//import { format } from 'date-fns'

// Represent 11 February 2014 in middle-endian format:
var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
//=> '02/11/2014'
/* // if you need to fetch data at request time instead of at build time, you can try Server-side Rendering: data is fetched and html is generated on each request. you need to export getServerSideProps use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time.

export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
//client side rendering
Statically generate (pre-render) parts of the page that do not require external data.
When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.
##
export default function Home(props) { ... }
// client side rendering
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
} //tells next that the page invoking the func has external data
  //that needs resolved when pg. is pre-rendered at build time
*/

/*
export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  return res.json()
}
*/
/* //query database directly
// getStaticProps can only be exported from a page. You can’t export it from non-page files.
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}

{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es2020",
        "jsx": "preserve",
        "checkJs": true,
        "experimentalDecorators": true,
        "strictFunctionTypes": true,
        "baseUrl": ".",
        "paths": {
            "@/components/*": ["components/*"],
            "@/lib/*": ["lib/*"],
            "@/styles/*": ["styles/*"],
            "@/context/*": ["context/*"],
            "@/utils/*": ["utils/*"],
        },
    },
    "exclude": [
        "node_modules",
        "** /node_modules
/*"
    ]
} */