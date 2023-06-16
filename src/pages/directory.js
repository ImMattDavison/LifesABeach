import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Col, Row } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Pronoun Directory</h1>
                <p className={styles.description}>Don't get washed away in the sea of terminology.</p>

                <Row>
                    <Col xs={{span: 10, offset:1}} sm={{span: 5, offset: 1}} md={{span: 4, offset: 2}} lg={{span: 3, offset: 2}}>colcolcolcol</Col>
                    <Col xs={{span: 10, offset: 1}} sm={{span: 5}} md={{span: 4}} lg={{span: 3}}>colcolcolcol</Col>
                    <Col xs={{span: 10, offset: 1}} sm={{span: 5, offset: 1}} md={{span: 4, offset: 2}} lg={{span: 3}}>colcolcolcol</Col>
                    <Col xs={{span: 10, offset:1}} sm={{span: 5}} md={{span: 4}} lg={{span: 3, offset: 1}}>colcolcolcol</Col>
                    <Col xs={{span: 10, offset: 1}} sm={{span: 5, offset: 1}} md={{span: 4, offset: 2}} lg={{span: 3}}>colcolcolcol</Col>
                    <Col xs={{span: 10, offset: 1}} sm={{span: 5}} md={{span: 4}} lg={{span: 3}}>colcolcolcol</Col>
                </Row>

            </main>
        </>
    )
}
