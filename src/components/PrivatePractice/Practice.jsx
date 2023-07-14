import React from 'react'
import { motion } from 'framer-motion'
import s from "./Practice.module.scss"
import Private from './../../assets/private.jpg'

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

export default function Practice() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.practice}>
            <div className="container">
                <motion.h2 custom={1} variants={textAnimation}>Private Practice</motion.h2>
                <div className={s.examples}>
                    <motion.div custom={2} variants={textAnimation} className={s.examples__photo}>
                        <img className={s.examples__photo1} src={Private} alt="" />
                        <img className={s.examples__photo2} src={Private} alt="" />
                    </motion.div>
                    <motion.div custom={3} variants={textAnimation} className={s.examples__practice}>
                        <ul>
                            <li><p>Финансовые и корпоративные сделки</p></li>
                            <li><p>Коммерческая практика</p></li>
                            <li><p>Недвижимость и строительство</p></li>
                            <li><p>Особые задачи для частных клиентов</p></li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}
