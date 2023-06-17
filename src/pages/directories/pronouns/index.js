import styles from '@/styles/Directory.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import data from '/public/json/pronouns.json'

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Container className={styles.container}>
                    <h1 className={styles.title}>Pronoun Directory</h1>
                    <p className={styles.description}>Don't get washed away in the sea of terminology.</p>

                    <Row className={styles['description', 'pronoun']}>
                        {
                            data.pronouns.map(pronoun => {
                                console.log("pronoun");
                                return <Col xs={12} sm={6} md={4} lg={3} className={styles.pronoun}>
                                    <a href={"/api/pronouns/" + pronoun.short.replace('/', '-')} className={styles.pronoun}>
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
