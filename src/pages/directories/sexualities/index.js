import styles from '@/styles/Directory.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import data from '/public/json/sexualities.json'

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Container className={styles.container}>
                    <h1 className={styles.title}>Sexuality Directory</h1>
                    <p className={styles.description}>Don't get washed away in the sea of terminology.</p>

                    <Row className={styles['description', 'pronoun']}>
                        {
                            data.sexualities.map(sexuality => {
                                return <Col xs={12} sm={6} md={4} lg={3} className={styles.pronoun}>
                                    <a href={"/directories/sexualities/" + sexuality.name} className={styles.pronoun}>
                                        {
                                            sexuality.name
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