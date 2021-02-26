import style from '../styles/EatLocal.module.scss'
import Arroser from "./assets/illustration/Arroser";

export default function MangezLocal () {
    return (
        <section className={style.eatLocal}>
            <div className={style.wrapper}>
                <div>
                    <h2>Consommez local</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <a href="#">Achetez nos produits</a>
                </div>
                <Arroser />
            </div>

        </section>
    )
}