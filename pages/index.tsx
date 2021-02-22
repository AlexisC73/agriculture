import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../Components/Header'

export default function Home() {
    return (
        <>
            <Head>
                <title>Accueil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
        </>
    )
}
