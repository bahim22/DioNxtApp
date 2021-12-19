import Image from 'next/image'
import Link from 'next/link'
import { Carousel, CarouselItem, Container, ListGroup, ListGroupItem, Modal, NavDropdown, NavItem, Row } from 'react-bootstrap'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'
//import {BsPrefixRefForwardingComponent} from 'react-bootstrap/esm/helpers'

export default function Sidebar() {
  return (
    <Container className="md-container" id='_next'>
        <Navbar>
            <NavDropdown>
                <NavItem>
                    <ListGroup className='default'>
                        <ListGroupItem>
                            <li>
                                <Link href="/">
                                    <a> Landing Page</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/home">
                                    <a> Blog Page</a>
                                </Link>

                            </li>
                            <li>
                                <Link href="/base">
                                    <a> About Page</a>
                                </Link>
                            </li>
                        </ListGroupItem>
                    </ListGroup>
                </NavItem>
            </NavDropdown>
        </Navbar>
        <Container>
        <Row>
        <Carousel>
        <CarouselItem>
            <Image
            layout='responsive'
            src="/img/bg7.jpg"
            className={utilStyles.container}
            height={200}
            width={200}
            alt='Nx Next Preview'
            />
        </CarouselItem>
        <CarouselItem>
            <Image
            layout='responsive'
            src="/img/bg7.jpg"
            className={utilStyles.container}
            height={200}
            width={200}
            alt='Django preview'
            />
        </CarouselItem>
        <CarouselItem>
            <Image
            layout='responsive'
            src="/img/bg7.jpg"
            className={utilStyles.container}
            height={200}
            width={200}
            alt='React Preview'
            />
        </CarouselItem>
        </Carousel>
        </Row>
        </Container>

        <Container className={styles.grid}>
        <nav class='nav'>
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
        <Link href="/posts/[id]">
            <a className={utilStyles.colorInherit}>Posts Page</a>
        </Link>
        </a>
        </nav>
        </Container>
    </Container>
  )
}