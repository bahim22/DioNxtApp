//import Image from 'next/image'
import Link from 'next/link'
import { ListGroup, ListGroupItem, Navbar, NavDropdown, NavItem, Row } from 'react-bootstrap'
//import utilStyles from '../styles/utils.module.css'
//import styles from './layout.module.css'
import React from 'react'
import Template from './template'
//import {BsPrefixRefForwardingComponent} from 'react-bootstrap/esm/helpers'

export default function Sidebar() {
  return (
    <main class='.main'>
        <Navbar>
            <NavDropdown>
                <NavItem>
                    <ListGroup className='default'>
                        <ListGroupItem>
                            <li>
                                <Link href="/" passHref>
                                    <MyButton />
                                </Link>
                            </li>
                            <li>
                                <Link href="/home" passHref>
                                    <MyButton />
                                </Link>
                            </li>
                            <li>
                                <Link href="/base" passHref>
                                    <MyButton />
                                </Link>
                            </li>
                        </ListGroupItem>
                    </ListGroup>
                </NavItem>
            </NavDropdown>
        </Navbar>
        <Template />
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