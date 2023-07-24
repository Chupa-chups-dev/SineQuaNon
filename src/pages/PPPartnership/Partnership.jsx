import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './Partnership.module.scss'
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/NavSideBar/SideBar';

const textAnimation = {
    hidden: {
        rotateY: 90,
    },
    visible: custom => ({
        rotateY: 0,
        transition: { delay: custom * 0.3 },

    }),
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerDirection: -1
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
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
                                    fill: 'none', // Add this line to remove the black background
                                }}
                            />
                        </svg>
                    </button>
                    <motion.div variants={container}
                        initial="hidden"
                        animate="show" className={s.container}>
                        <div className={s.investment__title}>
                            <motion.h1
                                variants={item}
                            >Государственно-частное партнерство</motion.h1>
                        </div>
                        {/* <motion.p variants={item} className={s.investment__subtitle}>Основу нашей ГЧП практики составляют проекты в социальной сфере и сфере жилищно-коммунального хозяйства.</motion.p>
                        <motion.p variants={item} className={s.investment__inf}>Городская инфраструктура + ТКО + Здравоохранение + Школы и детсады + Спортивные объекты.</motion.p> */}
                    </motion.div>
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
                                <div className={s.category__first}>
                                    <h5>Юридические слуги по комплексному организационно-правовому сопровождению проектов в сфере ГЧП включают:</h5>
                                    <motion.ul initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.2, once: true }} >
                                        <motion.li custom={1}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Помощь в выборе оптимальной формы ГЧП для конкретного проекта;</motion.li>
                                        <motion.li custom={1}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Разработка концепции концессионного соглашения/ГЧП проекта;</motion.li>
                                        <motion.li custom={1}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Подготовка предложения о заключении концессионного соглашения или соглашения о ГЧП/МЧП;</motion.li>
                                        <motion.li custom={2}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Консультирование по вопросам нормотворчества и внесения изменений в действующее нормативное регулирование;</motion.li>
                                        <motion.li custom={2}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Подготовка заявок и конкурсных предложений и юридическое сопровождение участия в конкурсных процедурах;</motion.li>
                                        <motion.li custom={2}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Выявление и оценка юридических рисков;</motion.li>
                                        <motion.li custom={3}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Проведение переговоров и согласование итоговых условий концессионного соглашения или соглашения о ГЧП/МЧП;</motion.li>
                                        <motion.li custom={3}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Корпоративные вопросы: подготовка проектных компаний под проекты ГЧП;</motion.li>
                                        <motion.li custom={3}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Взаимодействие с ведущими банками и специализированными организациями для согласования условий финансирования проекта;</motion.li>
                                        <motion.li custom={4}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation}>Юридическое сопровождение коммерческого и финансового закрытий проекта.</motion.li>
                                    </motion.ul>
                                </div>
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
