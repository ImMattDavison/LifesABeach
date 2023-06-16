import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Life's a Beach</h1>
                <p className={styles.description}>Don't get washed away in the sea of terminology.</p>
            </main>
        </>
    )
}
