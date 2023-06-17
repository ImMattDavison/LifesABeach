import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Col, Row, Container } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Life's a Beach</h1>
                <p className={styles.description}>don't get washed away in the sea of terminology.</p>
                <p>the API and info site to save you!</p>
                <Row className={styles.row}>
                    <a className={styles.button} href='/directories/pronouns'>pronouns</a>
                    <a className={styles.button} href='/directories/sexualities'>sexualities</a>    
                </Row>
            </main>
        </>
    )
}
