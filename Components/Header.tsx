import style from '../styles/Header.module.scss'

export default function Header () {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <p>GAEC du</p>
                <p>M<span>t</span> Charvin</p>
            </div>
            <div className={style.menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}