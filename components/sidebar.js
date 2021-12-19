import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

export default function Sidebar() {
  return (
    <>
        <div>
            <header className={utilStyles.header}>
                header function
            </header>
        </div>
        <nav className={styles.nav}>
        <input className={styles.input} placeholder="Search..." />
        <Link href="/">
            <a>Main Page</a>
        </Link>
        <Link href="/home">
            <a>Blog Page</a>
        </Link>
        <Link href="/base">
            <a>About Page</a>
        </Link>
        <Link href="/api/hello">
            <a>API Page</a>
        </Link>
        <a className={utilStyles.headingMd}>
        <Link href="/lib/posts">
            <a className={utilStyles.colorInherit}>Posts Page</a>
        </Link>
        </a>
        </nav>
    </>
  )
}