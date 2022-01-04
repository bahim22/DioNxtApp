//import Image from 'next/image'
import Link from 'next/link'
import { ListGroup, ListGroupItem, Navbar, NavDropdown, NavItem } from 'react-bootstrap'
//import utilStyles from '../styles/utils.module.css'
//import styles from './layout.module.css'
import React from 'react'
//import Template from './template'
//import {BsPrefixRefForwardingComponent} from 'react-bootstrap/esm/helpers'

export default function Sidebar() {
  return (
<main class='main'>
<Navbar>
<NavDropdown>
<NavItem>
<ListGroup className='default'>
    <ListGroupItem>
    <li>
        <Link href="/" passHref>
            <MyButton />
        </Link>item 1
    </li>
    <li>
        <Link href="/home" passHref>
            <MyButton />
        </Link>
    </li>
    <li>
        <Link href="/posts" passHref>
            <MyButton />
        </Link>
    </li>
    </ListGroupItem>
</ListGroup>
</NavItem>
</NavDropdown>
</Navbar>
</main>
  )
}
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  )
})