import styles from '@/styles/Directory.module.css'
import Link from 'next/link'
import { Col, Row, Container } from 'react-bootstrap'
import data from '/public/json/pronouns.json'

export default function Home() {
    return (
        <>
            <Link href="/"><img src="/image/pridehaj.png" alt="pride haj" className={styles.prideImage}/></Link>
            <main className={styles.main}>
                <Container className={styles.container}>
                    <h1 className={styles.title}>pronoun directory</h1>
                    <p className={styles.description}>don&apos;t get washed away in the sea of terminology.</p>

                    <Row className={styles['description', 'pronoun']}>
                        {
                            data.pronouns.map(pronoun => {
                                console.log("pronoun");
                                return <Col key={pronoun} xs={12} sm={6} md={4} lg={3} className={styles.pronoun}>
                                    <a href={"/directories/pronouns/" + pronoun.short.replace('/', '-')} className={styles.pronoun}>
                                        {
                                            pronoun.short
                                        }
                                    </a>
                                </Col>
                            })
                        }
                    </Row>
                </Container>
                

            </main>
        </>
    )
}
