import '../styles/global.css'
//import '../style/index.css'
//use with index.css and template.js (using react w bootstrap ) npm needs install bootstrap and react-bootstrap

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

/**
 * export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
use when each page has it's outline in the function but gets the layout at bottom of page that has combo of components. this has a global css file and each compon has a name.module.css file; or import the layout.mod.css file and add diff tags
 */