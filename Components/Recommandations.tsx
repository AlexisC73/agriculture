import style from '../styles/Recommandations.module.scss'
import Ble from "./assets/icon/ble";

export default function Recommandations () {
    return (
        <section className={style.recommandations}>
            <h2>Nos engagements</h2>
            <ul>
                <li><Ble /> <p>Une agriculture raisonnée</p></li>
                <li><p>Une agriculture raisonnée</p><Ble /></li>
                <li><Ble /> <p>Une agriculture raisonnée</p></li>
            </ul>
        </section>
    )
}