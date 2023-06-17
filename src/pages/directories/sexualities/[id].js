import axios from 'axios'
import styles from '@/styles/Directorypage.module.css'
import { Col, Row, Container } from 'react-bootstrap'

export const getStaticPaths = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default function Pronoun({ sexuality, params }) {

    return (   
        <>
            <main className={styles.main}>
                <Container className={styles.container}>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className={styles.col}>
                            <h1 className={styles.pronounInfoTitle}>{sexuality.sexuality}</h1>
                            <p className={styles.pronounInfo}>also known as: {sexuality.aka}</p>
                            <p className={styles.pronounInfo}>definition: {sexuality.definition}</p>
                            <p className={styles.pronounEndpoint}>API endpoint:</p>
                            <code className={styles.code}>
                                https://lifesabeach.tech/api/sexualities/{sexuality.sexuality}
                            </code>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className={styles.col}>
                            <img src={sexuality.flags} className={styles.image} alt={sexuality.sexuality + ' flag'} width='100%' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} className={styles.col}>
                            <h2 className={styles.sampleOutputh2}>sample output:</h2>
                            <code className={styles.code}>
                            &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;status: '200 OK',<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;sexuality: {sexuality.sexuality},<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;aka: [ '{sexuality.aka}' ],<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;definition: [ '{sexuality.definition}' ],<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;flag: [ '{sexuality.flag}' ]<br/>
                            &#125;
                            </code>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export async function getStaticProps({ params }) {
    console.log('params ' + params.id)
    
    const sexuality = await axios.get('http://localhost:3000/api/sexualities/' + params.id)

    console.log('here ' + sexuality.data)

    return {
        props: {
            sexuality: sexuality.data,
            params: params
        }
    }
}
