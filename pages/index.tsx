import Head from 'next/head'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
// @ts-ignore
import Recommandations from '../Components/Recommandations';
import MangezLocal from '../Components/MangezLocal'

export default function Home() {
    return (
        <>
            <Head>
                <title>Accueil</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Vous souhaitez manger mieux tout en achetant des produits locaux aux meilleurs prix ?" />
            </Head>

            <Header />
            <Hero />
            <Recommandations />
            <MangezLocal />
        </>
    )
}
