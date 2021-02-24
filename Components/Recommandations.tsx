import style from '../styles/Recommandations.module.scss'
import Ble from "./assets/icon/ble";
import Apple from "./assets/icon/Apple";

export default function Recommandations () {
    return (
        <section className={style.recommandations}>
            <h2>Nos engagements</h2>
            <ul>
                <li><Ble /> <p>Une agriculture raisonnée</p></li>
                <li><p>Une agriculture raisonnée</p><Apple /></li>
                <li><Ble /> <p>Une agriculture raisonnée</p></li>
            </ul>
        </section>
    )
}