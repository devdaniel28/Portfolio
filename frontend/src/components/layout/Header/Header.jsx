import Image from 'next/image'
import Link from 'next/link'
const styles = require('./Header.module.css')


//! Components
import Nav from '../Nav/Nav'

export default function Header() {

    return (
        <header className={styles.header}>
            <Link href='/'>
              <Image 
                className={styles.imgheader}
                src='/dvcDaniel.png'
                alt='Logo pessoal'
                width={50}
                height={50}
                priority
              />
            </Link>
            <h1>dvcDaniel</h1>
              <nav>
                <Nav link='#about' text='Sobre'/>
                <Nav link='#skills' text='Skills'></Nav>
                <Nav link='#projects' text='Projetos'></Nav>
                <Nav link='#contact' text='Contato'></Nav>
              </nav>
        </header>
    )
}