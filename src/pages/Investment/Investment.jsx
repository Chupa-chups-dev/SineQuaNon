import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './Investment.module.scss'
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/NavSideBar/SideBar';

export default function Investment() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isVisible2, setIsVisible2] = React.useState(false);
    const toggleVisibility2 = () => {
        setTimeout(() => {
            setIsVisible2(!isVisible2);
        }, 100);
    };
    const toggleVisibility = () => {
        setTimeout(() => {
            setIsVisible(!isVisible);
        }, 100);
    };
    const itemStyle2 = {
        opacity: isVisible2 ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    };
    const itemStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    };
    const textAnimation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: 'all 1s ease-in-out',

        },
    }
    return (
        <>
            <SideBar />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className={s.investment}>
                <div className={s.investment__container}>
                    <div className={s.Bg}></div>
                    <button className="arrow">
                        <svg class="w-5 h-5 xl:w-6 xl:h-6" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g>
                                <polygon points="0 0 0 21.38 18 36 36 21.38 36 0 29.25 0 29.25 18 18 27 6.75 18 6.75 0 0 0" fill="#ffffff"></polygon>
                            </g>
                        </svg>
                    </button>
                    <div className={s.container}>
                        <div className={s.investment__title}>
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2 }}
                                variants={textAnimation}>Инвестиции</motion.h1>
                        </div>
                    </div>
                </div>
                <div className={s.category}>
                    <div className="container">
                        <motion.div variants={textAnimation} className={s.category__container}>
                            <div className={s.category__first}>
                                <h4>Банковское финансирование</h4>
                                <ul>
                                    <li>Богатый опыт организации заемного финансирования</li>
                                    <li style={isVisible2 ? { opacity: 1 } : { opacity: 0.3, transition: 'all 0.2s ease-in-out' }}>Возможность организации кредита в кратчайшие сроки</li>
                                    <div style={itemStyle2}>
                                        {isVisible2 && (
                                            <>
                                                <li>Широкая контактная база финансовых инвесторов</li>
                                                <li>Опыт создания конкуренции среди инвесторов в процессе размещения</li>
                                                <li>Возможность привлечения бридж финансирования под будущее размещение акций</li>
                                            </>
                                        )}
                                    </div>
                                </ul>
                                <button onClick={toggleVisibility2}>{!isVisible2 ? 'Еще' : 'Скрыть'}</button>
                            </div>
                            <div className={s.category__second}>
                                <h4>Частное размещение акций</h4>
                                <ul >
                                    <li>Экспертиза в структурировании взаимоотношений акционеров</li>
                                    <li style={isVisible ? { opacity: 1 } : { opacity: 0.3, transition: 'all 0.2s ease-in-out' }}>Умение выбрать оптимальный момент для размещения</li>
                                    <div style={itemStyle}>
                                        {isVisible && (
                                            <>
                                                <li>Широкая контактная база финансовых инвесторов</li>
                                                <li>Опыт создания конкуренции среди инвесторов в процессе размещения</li>
                                                <li>Возможность привлечения бридж финансирования под будущее размещение акций</li>
                                            </>
                                        )}
                                    </div>
                                </ul>
                                <button onClick={toggleVisibility}>{!isVisible ? 'Еще' : 'Скрыть'}</button>
                            </div>
                        </motion.div>
                    </div>
                    <div className={s.line}></div>
                </div>
                <div className={s.stages}>
                    <div className="container">
                        <motion.h2 variants={textAnimation} className={s.stages__title}>Основные этапы сопровождения сделки</motion.h2>
                        <motion.div variants={textAnimation} className={s.stages__container}>
                            <div className={s.stages__contNumb}>
                                <div className={s.stages__line}></div>
                                <div className={s.stages__number}><p>1</p></div>
                                <div className={s.stages__number}><p>2</p></div>
                                <div className={s.stages__number}><p>3</p></div>
                                <div className={s.stages__number}><p>4</p></div>
                                <div className={s.stages__number}><p>5</p></div>
                            </div>
                            <div className={s.stages__contStages}>
                                <div>
                                    <h6>ПОСТАНОВКА ЗАДАЧ</h6>
                                    <p>Выявление основных параметров кредитования/сделки</p>
                                </div>
                                <div>
                                    <h6>«УПАКОВКА» ИНФОРМАЦИИ</h6>
                                    <p>Подготовка материалов для рассылки банкам/инвесторам</p>
                                </div>
                                <div>
                                    <h6>ВЫБОР ПОТЕНЦИАЛЬНЫХ БАНКОВ / ИНВЕСТОРОВ</h6>
                                    <p>Составление приоритетного списка банков/инвесторов</p>
                                </div>
                                <div>
                                    <h6>ПОДГОТОВКА К КРЕДИТНОМУ КОМИТЕТУ / АНАЛИЗ КОМПАНИИ ИНВЕСТОРАМИ</h6>
                                    <p>Получение решения кредитного комитета и юридически обязывающих предложений от инвесторов</p>
                                </div>
                                <div>
                                    <h6>ПОДПИСАНИЕ И ЗАКРЫТИЕ СДЕЛКИ</h6>
                                    <p>Получение Клиентом денежных средств</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className={s.backToHome}>
                    <Link to="/">Вернуться на главную</Link>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}
