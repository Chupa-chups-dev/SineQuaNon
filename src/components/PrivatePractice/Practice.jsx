import React from 'react'
import s from "./Practice.module.scss"
import Private from './../../assets/private.jpg'

export default function Practice() {
  return (
    <div className={s.practice}>
        <div className="container">
            <h2>Private Practice</h2>
            <div className={s.examples}>
                <div className={s.examples__practice}>
                    <ul>
                        <li><a href='/'>Финансовые и корпоративные сделки</a></li>
                        <li><a href='/'>Коммерческая практика</a></li>
                        <li><a href='/'>Недвижимость и строительство</a></li>
                        <li><a href='/'>Особые задачи для частных клиентов</a></li>
                    </ul>
                </div>
                <div className={s.examples__photo}>
                    <img className={s.examples__photo1} src={Private} alt="" />
                    <img className={s.examples__photo2} src={Private} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
