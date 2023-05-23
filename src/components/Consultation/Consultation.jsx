import React from 'react'
import s from './Consultation.module.scss'
import Svg1 from './../../assets/Strategies.svg'
import Svg2 from './../../assets/Conversation.svg'
import Svg3 from './../../assets/Purposes.svg'
import Svg4 from './../../assets/Tactics.svg'

export default function Consultation({bottomBlockRef}) {
  return (
    <div ref={bottomBlockRef} className={s.consultation}>
        <div className="container">
            <h2>КОНСУЛЬТАЦИЯ: <span>СТРАТЕГИЯ И ТАКТИКА</span></h2>
            <div className={s.consultation__container}>
                <div>
                    <img src={Svg1} alt="" />
                    <p><span>Выработка общей стратегии:</span> собираем все факторы и находим для вас решение задачи.</p>
                </div>
                <div>
                    <img src={Svg3} alt="" />
                    <p><span>Ваши цели</span> - наша оценка рисков и поиск вариантов их достижения.</p>
                </div>
                <div>
                    <img src={Svg2} alt="" />
                    <p><span>Переговоры:</span> фокус на результативности, краткосрочных и долгосрочных эффектах.</p>
                </div>
                <div>
                    <img src={Svg4} alt="" />
                    <p><span>Тактика:</span> обращаем внимание на детали и создаем свободу для вашего маневра в сложных ситуациях.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
