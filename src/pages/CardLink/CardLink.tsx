import style from './CardLink.module.scss'
import img from '../../assets/png/logo.webp'
import { Button } from '../../ui/Button'

function CardLink() {
    return (
        <div className={style.box}>
            <img className={style.img} src={img} alt="" />
            <h1 className={style.title}>ZERKALA |Top bonus| 24/7</h1>
            <p className={style.sub}>1 043 Подписчиков</p>
            <p className={style.descr}>Всегда актуальные зеркала доступ и бонусы 24/7</p>
            <span className={style.span}>Ежедневные розыгрыши призов и промокодов.</span>
            {/* <div className={style.boxLink}>
                <a className={style.link} href="">@Ссылка</a>
                <a className={style.link} href="">@Ссылка</a>
                <a className={style.link} href="">@Ссылка</a>
            </div> */}
            <a href="tg://join?invite=yOVddumL0-g5MDRi">
                <Button className={style.btn} onClick={() => window.ym(99295344,'reachGoal','btn-click-me')}>
                 JOIN CHANNEL
                </Button>
            </a>
            <a href="https://telegram.org/dl/desktop/win64">скачать</a>
        </div>
    )
}

export default CardLink