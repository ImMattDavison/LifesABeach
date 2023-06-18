import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Link href="/"><img src="/image/pridehaj.png" alt="pride haj" className={styles.prideImage}/></Link>
            <main className={styles.main}>
                <h1 className={styles.title}>Life&apos;s a Beach</h1>
                <p className={styles.description}>don&apos;t get washed away in the sea of terminology.</p>
                <p>the API and info site to save you!</p>
                <Row className={styles.row}>
                    <Link className={styles.button} href='/directories/pronouns'>pronouns</Link>
                    <Link className={styles.button} href='/directories/sexualities'>sexualities</Link>    
                </Row>
            </main>
        </>
    )
}
