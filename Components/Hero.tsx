import style from '../styles/Hero.module.scss'

export default function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.overlay}></div>
            <h1>Mieux Manger</h1>
            <p>Un choix que nous sommes tous capable de faire pour être en meilleure santé.</p>
        </div>
    )
}