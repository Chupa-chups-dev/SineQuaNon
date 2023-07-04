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
                        <svg class="w-5 h-5 xl:w-6 xl:h-6" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g>
                                <polygon points="0 0 0 21.38 18 36 36 21.38 36 0 29.25 0 29.25 18 18 27 6.75 18 6.75 0 0 0" fill="#ffffff"></polygon>
                            </g>
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
                <div ref={bottomBlockRef} className="container">
                    <div className={s.description1}>
                        <h3>Корпоративная практика включает:</h3>
                        <p>Сопровождение сделок M&A, создание совместных предприятий (JV), а также проведение юридических проверок активов в рамках таких сделок. Отдельным блоком в данной практике выделен сервис «Корпоративный секретарь».</p>
                    </div>
                    <div className={s.description2}>
                        <h3>Корпоративная практика нашей фирмы <span>– одна из самых ключевых и динамичных:</span></h3>
                        <div className={s.description2__container}>
                            <div>- Опционы, корпоративные договоры, договоры с менеджментом и локальные нормативные акты, политики и многие другие документы и юридические конструкции.</div>
                            <div>- Реорганизация и реструктуризация бизнеса и активов: слияния, присоединения, разделения юридических лиц и активов.</div>
                            <div>- Мы разрабатываем юридические конструкции и сопровождаем сделки широкого спектра и разной сложности: от простых регистраций юридических лиц до создания международных холдинговых структур, от купли-продажи долей в ООО до сложных M&A сделок с получением согласований в ФАС России и Правовой комиссии при Министерстве Финансов.</div>
                        </div>
                    </div>
                    <div className={s.description3}>
                        <h3>С января 2023 года мы запустили услугу <span>«Корпоративный секретарь»</span> (SQN-CorpSec).</h3>
                        <h4>SQN-CorpSec это:</h4>
                        <div>
                            <p>Профессиональная юридическая поддержка ваших бизнес-процессов на постоянной основе.</p>
                            <p>Медиация корпоративных конфликтов и тупиковых ситуаций, профилактика их наступления.</p>
                            <p>Полная конфиденциальность информации.</p>
                            <p>Экспертная поддержка при разрешении споров между участниками и обществом.</p>
                            <p>Настройка баланса корпоративного управления на разных уровнях: собственники бизнеса, совет директоров, генеральный директор и прочие звенья.</p>
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
