import Head from 'next/head'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import MangezLocal from '../Components/MangezLocal'
// @ts-ignore
import Recommandations from '../Components/Recommandations';

export default function Home() {
    return (
        <>
            <Head>
                <title>Accueil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />
            <Recommandations />
            <MangezLocal />
        </>
    )
}
