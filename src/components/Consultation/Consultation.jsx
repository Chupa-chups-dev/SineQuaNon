import React from 'react'
import { motion } from 'framer-motion'
import s from './Consultation.module.scss'
import Svg1 from './../../assets/Strategies.svg'
import Svg2 from './../../assets/Conversation.svg'
import Svg3 from './../../assets/Purposes.svg'
import Svg4 from './../../assets/Tactics.svg'

const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 },

    }),
}

export default function Consultation({ bottomBlockRef }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            ref={bottomBlockRef} className={s.consultation}>
            <div className="container">
                <motion.h2 custom={1} variants={textAnimation}>КОНСУЛЬТАЦИЯ: СТРАТЕГИЯ И ТАКТИКА</motion.h2>
                <motion.div custom={2} variants={textAnimation} className={s.consultation__container}>
                    <div>
                        <img src={Svg1} alt="" />
                        <p>Выработка общей стратегии: собираем все факторы и находим для вас решение задачи.</p>
                    </div>
                    <div>
                        <img src={Svg3} alt="" />
                        <p>Ваши цели - наша оценка рисков и поиск вариантов их достижения.</p>
                    </div>
                    <div>
                        <img src={Svg2} alt="" />
                        <p>Переговоры: фокус на результативности, краткосрочных и долгосрочных эффектах.</p>
                    </div>
                    <div>
                        <img src={Svg4} alt="" />
                        <p>Тактика: обращаем внимание на детали и создаем свободу для вашего маневра в сложных ситуациях.</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
