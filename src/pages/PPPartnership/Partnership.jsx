import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './Partnership.module.scss'
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/NavSideBar/SideBar';

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

export default function Partnership() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const bottomBlockRef = React.useRef(null);

    const scrollToBottom = () => {
        bottomBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    };
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
        transform: isVisible2 ? 'translateY(0%)' : 'translateY(-10%)',
        transition: 'opacity 0.5s ease-in-out',
        transition: 'all 1s ease-in-out'
    };
    const itemStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0%)' : 'translateY(-10%)',
        transition: 'opacity 0.5s ease-in-out',
        transition: 'all 1s ease-in-out'
    };

    return (
        <>
            <SideBar />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className={s.investment}>
                <div className={s.investment__container}>
                    <div className={s.Bg}></div>
                    <button onClick={scrollToBottom} className="arrow">
                        <svg class="w-5 h-5 xl:w-6 xl:h-6" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g>
                                <polygon points="0 0 0 21.38 18 36 36 21.38 36 0 29.25 0 29.25 18 18 27 6.75 18 6.75 0 0 0" fill="#ffffff"></polygon>
                            </g>
                        </svg>
                    </button>
                    <div className={s.container}>
                        <div className={s.investment__title}>
                            <motion.h1
                                custom={1} variants={textAnimation}
                            >Государственно-частное партнерство</motion.h1>
                        </div>
                        <motion.p custom={2} variants={textAnimation} className={s.investment__subtitle}>Основу нашей ГЧП практики составляют проекты в социальной сфере и сфере жилищно-коммунального хозяйства.</motion.p>
                        <motion.p custom={3} variants={textAnimation} className={s.investment__inf}>Городская инфраструктура + ТКО + Здравоохранение + Школы и детсады + Спортивные объекты.</motion.p>
                    </div>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    ref={bottomBlockRef} className={s.category}>
                    <div className="container">
                        <div className={s.category__container}>
                            <motion.div custom={1} variants={textAnimation} className={s.category__first}>
                                <h4>Что мы делаем:</h4>
                                <ul>
                                    <li>Разработка концепции концессионного/ГЧП проекта.</li>
                                    <li style={isVisible2 ? { opacity: 1 } : { opacity: 0.3, transition: 'all 0.2s ease-in-out' }}>Подготовка предложения о заключении концессионного соглашения или соглашения о ГЧП/МЧП.</li>
                                    <div style={itemStyle2}>
                                        {isVisible2 && (
                                            <>
                                                <li>Консультирование по вопросам нормотворчества и внесения изменений в действующее нормативное регулирование.</li>
                                                <li>Подготовка заявок и конкурсных предложений и юридическое сопровождение участия в конкурсных процедурах.</li>
                                                <li>Проведение переговоров и согласование итоговых условий концессионного соглашения или соглашения о ГЧП/МЧП.</li>
                                                <li>Корпоративные вопросы: подготовка проектных компаний.</li>
                                                <li>Взаимодействие с ведущими банками и специализированными организациями для согласования условий финансирования проекта.</li>
                                            </>
                                        )}
                                    </div>
                                    <button onClick={toggleVisibility2}>{!isVisible2 ? 'Еще' : 'Скрыть'}</button>
                                </ul>

                            </motion.div>
                            <motion.div
                                custom={1} variants={textAnimation}
                                className={s.category__second}>
                                <h4>А также:</h4>
                                <ul >
                                    <li>Финансовое моделирование проекта и бюджетное планирование.</li>
                                    <li style={isVisible ? { opacity: 1 } : { opacity: 0.3, transition: 'all 0.2s ease-in-out' }}>Сопровождение коммерческого и финансового закрытий проекта, включая привлечение заемных денежных средств.</li>
                                    <div style={itemStyle}>
                                        {isVisible && (
                                            <>
                                                <li>Подготовка инвестиционных программ и тарифных решений в проектах ТКО.</li>

                                            </>
                                        )}
                                    </div>
                                </ul>
                                <button onClick={toggleVisibility}>{!isVisible ? 'Еще' : 'Скрыть'}</button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
                <div className={s.backToHome}>
                    <Link to="/">Вернуться на главную</Link>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}
