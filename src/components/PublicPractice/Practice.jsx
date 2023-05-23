import React from 'react'
import s from "./Practice.module.scss"
import Private from './../../assets/private.jpg'

export default function Practice() {
    return (
        <>  
            <div className={s.line}></div>
            <div className={s.practice}>
                <div className="container">
                    <h2>Private Practice</h2>
                    <div className={s.examples}>
                        <div className={s.examples__photo}>
                            <img className={s.examples__photo1} src={Private} alt="" />
                            <img className={s.examples__photo2} src={Private} alt="" />
                        </div>
                        <div className={s.examples__practice}>
                            <ul>
                                <li><a href='/'>Государственно-частное партнерство</a></li>
                                <li><a href='/'>Консультирование государственного сектора</a></li>
                                <li><a href='/'>Структурирование и сопровождение инвестиционных проектов</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
