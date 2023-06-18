import axios from 'axios'
import styles from '@/styles/Directorypage.module.css'
import Link from 'next/link'
import { Col, Row, Container } from 'react-bootstrap'

export const getStaticPaths = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default function Pronoun({ pronoun, params }) {

    return (   
        <>
            <Link href="/"><img src="/image/pridehaj.png" alt="pride haj" className={styles.prideImage}/></Link>
            <main className={styles.main}>
                <Container className={styles.container}>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className={styles.col}>
                            <h1 className={styles.pronounInfoTitle}>{pronoun.pronouns}</h1>
                            <p className={styles.pronounInfo}>type: {pronoun.types}</p>
                            <p className={styles.pronounInfo}>complete combination: {pronoun.combinations.longCombination}</p>
                            <p className={styles.pronounInfo}>example sentence: {pronoun.sampleSentences}</p>
                            <p className={styles.pronounEndpoint}>API endpoint:</p>
                            <code className={styles.code}>
                                https://lifesabeach.tech/api/pronouns/{pronoun.pronouns.replace('/', '-')}
                            </code>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className={styles.col}>
                            <img src={pronoun.flag} className={styles.image} alt={pronoun.pronouns + 'flag'} width='100%' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} className={styles.col}>
                            <h2 className={styles.sampleOutputh2}>sample output:</h2>
                            <code className={styles.code}>
                            &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;status: &apos;200 OK&apos;,<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;pronouns: &apos;he/him&apos;,<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;types: [ &apos;binary&apos; ],<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;combinations: &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shortCombination: [ &apos;he/him&apos; ],<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;longCombination: [ &apos;he/him/his/himself&apos; ]<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;sampleSentences: [ [ &apos;He went to the shop to pick up his food&apos; ] ],<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;flag: [ &apos;http://lifesabeach.tech/image/pronouns/he-him.webp&apos; ]<br/>
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
    console.log(params.id)
    
    const pronoun = await axios.get('http://localhost:3000/api/pronouns/' + params.id)

    console.log(pronoun.data)

    return {
        props: {
            pronoun: pronoun.data,
            params: params
        }
    }
}
