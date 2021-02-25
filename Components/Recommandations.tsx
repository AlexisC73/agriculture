import style from '../styles/Recommandations.module.scss'
import Ble from "./assets/icon/ble";
import Apple from "./assets/icon/Apple";
import {useLayoutEffect, useRef} from 'react'

export default function Recommandations () {
    const listRef = useRef()
    useLayoutEffect(() => {
        if (listRef['current'] !== undefined) {
            // @ts-ignore
            const children = [...listRef.current.childNodes]
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if(entry.intersectionRatio >= 0.5) {
                        entry.target.classList.remove(style.not_visible)
                        observer.unobserve(entry.target)
                    }
                })
            }, {
                root: null,
                threshold: [0.5]
            })


            children.forEach(child => {
                child.classList.add(style.not_visible)
                observer.observe(child)
            })
        }
    })

    return (
        <section id='recommandations' className={style.recommandations}>
            <h2>Nos engagements</h2>
            <ul ref={listRef}>
                <li><Ble /> <p>Une agriculture raisonnée</p></li>
                <li><Apple /><p>Des produits de saison</p></li>
                <li><Ble /> <p>Une agriculture raisonnée</p></li>
            </ul>
        </section>
    )
}