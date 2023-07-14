import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './CorporatePractice.module.scss'
import SideBar from '../../components/NavSideBar/SideBar'
import Footer from '../../components/Footer/Footer'


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
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className={s.practice}>
                <div className={s.practice__container}>
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
                        <div className={s.practice__title}>
                            <motion.h1
                                custom={1} variants={textAnimation}
                            >Корпоративная практика</motion.h1>
                        </div>
                    </div>
                </div>
                <div ref={bottomBlockRef}>
                    <div className={s.description1}>
                        <div className="container">
                            <h5>Корпоративная практика включает:</h5>
                            <p>Сопровождение сделок M&A, создание совместных предприятий (JV), а также проведение юридических проверок активов в рамках таких сделок. Отдельным блоком в данной практике выделен сервис «Корпоративный секретарь».</p>
                        </div>
                    </div>
                    <div className={s.description2}>
                        <div className="container">
                            <h3>Корпоративная практика нашей фирмы– одна из самых ключевых и динамичных:</h3>
                            <div className={s.description2__container}>
                                <div>Опционы, корпоративные договоры, договоры с менеджментом и локальные нормативные акты, политики и многие другие документы и юридические конструкции.</div>
                                <div>Реорганизация и реструктуризация бизнеса и активов: слияния, присоединения, разделения юридических лиц и активов.</div>
                                <div>Мы разрабатываем юридические конструкции и сопровождаем сделки широкого спектра и разной сложности: от простых регистраций юридических лиц до создания международных холдинговых структур, от купли-продажи долей в ООО до сложных M&A сделок с получением согласований в ФАС России и Правовой комиссии при Министерстве Финансов.</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.description3}>
                        <div className="container">
                            <h3>С января 2023 года мы запустили услугу <span>«Корпоративный секретарь»</span> (SQN-CorpSec).</h3>
                            <h4>SQN-CorpSec это:</h4>
                            <div className={s.description3__container}>
                                <div>Профессиональная юридическая поддержка ваших бизнес-процессов на постоянной основе.</div>
                                <div>Медиация корпоративных конфликтов и тупиковых ситуаций, профилактика их наступления.</div>
                                <div>Полная конфиденциальность информации.</div>
                                <div>Экспертная поддержка при разрешении споров между участниками и обществом.</div>
                                <div>Настройка баланса корпоративного управления на разных уровнях: собственники бизнеса, совет директоров, генеральный директор и прочие звенья.</div>
                            </div>
                        </div>
                    </div>
                    <h4 className={s.description4}>Действуя как Корпоративный секретарь, наша фирма сопровождает порядка 20 юридических лиц одновременно.</h4>
                </div>
                <div className={s.backToHome}>
                    <Link to="/">Вернуться на главную</Link>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}
