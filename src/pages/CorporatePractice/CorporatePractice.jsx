import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './CorporatePractice.module.scss'
import SideBar from '../../components/NavSideBar/SideBar'
import Footer from '../../components/Footer/Footer'


const textAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1, 
            ease: "easeOut", 
        },
    },
};

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
export default function CorporatePractice() {
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
                className={s.practice}>
                <div className={s.practice__container}>
                    <div className={s.BgBlack}></div>
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
                        <div

                            className={s.practice__title}>
                            <motion.h1 variants={item}
                            >Корпоративная практика</motion.h1>
                        </div>
                    </motion.div>
                </div>
                <div ref={bottomBlockRef}>
                    <div className={s.description1}>
                        <div className="container">
                            <h5>Корпоративное управление</h5>
                            <p>представляет собой сложный процесс, который во многом определяет эффективность и прибыльность компании.
                                Мы гарантируем надежное и профессиональное сопровождение корпоративных процессов, что позволяет нашим клиентам сосредоточиться на основной деятельности и достичь успеха в своих бизнес-целях.</p>
                        </div>
                    </div>
                    <div className={s.description2}>
                        <div className="container">
                            <h3>Корпоративная практика нашей фирмы– одна из самых ключевых и динамичных:</h3>
                            <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }} className={s.description2__container}>
                                <motion.div
                                    
                                    variants={textAnimation}><span>Создание и реструктуризация бизнеса:</span>
                                    <p>*  Проведение аудита юридических рисков проекта;</p>
                                    <p>*  Подбор удобной налоговой модели;</p>
                                    <p>*  Консультации по нормам российского или иностранного права;</p>
                                    <p>* Разработка оптимальной корпоративной структуры с учетом интересов разных групп владельцев бизнеса;</p>
                                    <p>*  Разработка правовой архитектуры запуска;</p>
                                    <p>* Анализ эффективности существующей корпоративной структуры;</p>
                                    <p>* Реструктуризация существующего бизнеса, с учетом санкций 2022-2023.</p>
                                </motion.div>
                                <motion.div
                                    
                                 
                                    variants={textAnimation}><span>Юридические лица (ЮЛ):</span>
                                    <p>*  Сопровождение процесса регистрации ЮЛ различных форм (АО, ООО и др.);</p>
                                    <p>*  Внесение изменений (смена наименования, увеличение/уменьшение уставного капитала, смена юридического адреса, внесение изменений в ЕГРЮЛ; внесение изменений в Устав, вход (ввод) нового участника, смена кодов ОКВЭД);</p>
                                    <p>*  Реорганизация ЮЛ путем слияния, разделения, выделения, преобразования, присоединения;</p>
                                    <p>*  Комплексное сопровождение процедуры ликвидации ЮЛ.</p>
                                </motion.div>

                            </motion.div>
                        </div>
                    </div>
                    <div className={s.description3}>
                        <div className="container">
                            <h3>С января 2023 года мы запустили услугу <span>«Корпоративный секретарь»</span> (SQN-CorpSec).</h3>
                            <h4>SQN-CorpSec это:</h4>
                            <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }} className={s.description3__container}>
                                <motion.div 
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Профессиональная юридическая поддержка ваших бизнес-процессов на постоянной основе.</motion.div>
                                <motion.div 
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Медиация корпоративных конфликтов и тупиковых ситуаций, профилактика их наступления.</motion.div>
                                <motion.div 
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Полная конфиденциальность информации.</motion.div>
                                <motion.div 
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Экспертная поддержка при разрешении споров между участниками и обществом.</motion.div>
                                <motion.div 
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Настройка баланса корпоративного управления на разных уровнях: собственники бизнеса, совет директоров, генеральный директор и прочие звенья.</motion.div>
                                <motion.div 
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Консультации по корпоративному управлению: будьте в курсе передовой практики управления и принимайте взвешенные решения.</motion.div>
                                <motion.div 
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Подготовка и проведение собраний: Мы позаботимся о планировании, подготовке повестки дня, оформлении бюллетеней, протоколов заседаний совета директоров и собраний участников/акционеров.</motion.div>
                                <motion.div 
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Соответствие нормативным требованиям: Обеспечьте соответствие компании законодательным требованиям благодаря нашему тщательному мониторингу.</motion.div>
                                <motion.div 
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}> Ведение корпоративной документации: От реестров акций до годовых отчетов и корпоративных договоров - мы обеспечиваем эффективное управление важнейшими корпоративными документами.</motion.div>
                            </motion.div>
                        </div>
                    </div>

                    <div className={s.description4}>
                        <div className="container">
                            <h4>Действуя как Корпоративный секретарь, наша фирма сопровождает порядка 20 юридических лиц одновременно.</h4>
                        </div>
                    </div>
                </div>
                {/* <div className={s.backToHome}>
                    <Link to="/">Вернуться на главную</Link>
                </div> */}
            </motion.div>
            <Footer />
        </>
    )
}
