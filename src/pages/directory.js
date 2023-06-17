import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Col, Row } from 'react-bootstrap'
import data from '/public/json/pronouns.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Pronoun Directory</h1>
                <p className={styles.description}>Don't get washed away in the sea of terminology.</p>

                <Row className={styles.description}>
                    {
                        data.pronouns.map(pronoun => {
                            console.log("pronoun");
                            return <Col xs={12} sm={6} md={4} lg={3}>
                                <a href={"/api/pronouns/" + pronoun.short.join("-")} className={styles.description}>
                                    {
                                        pronoun.short.join("-")
                                    }
                                </a>
                            </Col>
                        })
                    }
                </Row>
                

            </main>
        </>
    )
}
