import Head from 'next/head'
import Header from '../Components/Header'
import Hero from '../Components/Hero'

export default function Home() {
    return (
        <>
            <Head>
                <title>Accueil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />
        </>
    )
}
