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
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const bottomBlockRef = React.useRef(null);

    const scrollToBottom = () => {
        bottomBlockRef.current.scrollIntoView({ behavior: 'smooth' });
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
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 14 8"
                            xmlns="http://www.w3.org/2000/svg"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ cursor: 'pointer' }}
                        >
                            <path
                                d="M1 1L7 7L13 1"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                    transition: 'stroke 0.3s ease',
                                    stroke: isHovered ? '#891515' : 'white',
                                }}
                            />
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
                    <div>
                        <div className={s.category__text1}>
                            <div className="container">
                                <h3>
                                    Юристы SQN обладают многолетним опытом сопровождения ГЧП проектов. Основу нашей практики ГЧП составляют проекты в социальной сфере (школы, поликлиники, спортивные сооружения), жилищно-коммунального хозяйства (ТКО, прочие тарифные ЖКХ проекты) и в сфере инфраструктуры (парковки, фото-видео-фиксация, объекты дорожного хозяйства).
                                </h3>
                            </div>
                        </div>
                        <div className={s.category__text2}>
                            <div className="container">
                                <h4>SQN предоставляет полную поддержку в реализации проекта ГЧП. Наши юристы помогают оформить все необходимые документы, проводят анализ рисков и защищают интересы клиента в процессе сотрудничества с публичным партнером и кредитными организациями.</h4>
                            </div>
                        </div>
                        <div className={s.category__container}>
                            <div className="container">
                                <motion.div custom={1} variants={textAnimation} className={s.category__first}>
                                    <h5>Юридические слуги по комплексному организационно-правовому сопровождению проектов в сфере ГЧП включают:</h5>
                                    <ul>
                                        <li>Помощь в выборе оптимальной формы ГЧП для конкретного проекта;</li>
                                        <li >Разработка концепции концессионного соглашения/ГЧП проекта;</li>
                                        <li>Подготовка предложения о заключении концессионного соглашения или соглашения о ГЧП/МЧП;</li>
                                        <li>Консультирование по вопросам нормотворчества и внесения изменений в действующее нормативное регулирование;</li>
                                        <li>Подготовка заявок и конкурсных предложений и юридическое сопровождение участия в конкурсных процедурах;</li>
                                        <li>Выявление и оценка юридических рисков;</li>
                                        <li>Проведение переговоров и согласование итоговых условий концессионного соглашения или соглашения о ГЧП/МЧП;</li>
                                        <li>Корпоративные вопросы: подготовка проектных компаний под проекты ГЧП;</li>
                                        <li>Взаимодействие с ведущими банками и специализированными организациями для согласования условий финансирования проекта;</li>
                                        <li>Юридическое сопровождение коммерческого и финансового закрытий проекта.</li>
                                    </ul>
                                </motion.div>
                            </div>
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
