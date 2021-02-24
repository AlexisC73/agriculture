import style from '../styles/Hero.module.scss'
import ArrowDown from "./assets/icon/ArrowDown";

export default function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.overlay}></div>
            <h1>Mieux Manger</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className={style.arrowDown}>
                <ArrowDown />
            </div>
        </div>
    )
}