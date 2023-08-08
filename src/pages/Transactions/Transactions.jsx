import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './Transactions.module.scss'
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/NavSideBar/SideBar';

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
export default function Transactions() {
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
                        <div className={s.investment__title}>
                            <motion.h1
                                variants={item}
                            >Сделки</motion.h1>
                        </div>
                    </motion.div>
                </div>
                <div ref={bottomBlockRef}>
                    <div className={s.description1}>
                        <div className="container">
                            <h5>Pacta sunt servanda (от лат. «Договоры должны исполняться»). Наша фирма занимается сопровождением сделок широкого спектра и разного уровня сложности: от простых регистраций юридических лиц до создания международных холдинговых структур, от купли-продажи долей в ООО до сложных M&A сделок с получением согласований в ФАС России и Правовой комиссии при Министерстве Финансов.</h5>
                        </div>
                    </div>
                    <div className={s.description2}>
                        <div className="container">
                            <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }} className={s.description2__container}>
                                <motion.div custom={1}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation} className={s.description2__text}><span>Услуги:</span>
                                    <p>*  Составление документации, ведение переговоров, согласование необходимых условий сделки;</p>
                                    <p>*  Разработка структуры будущей сделки, включая схему расчетов;</p>
                                    <p>*  Осуществление проверки контрагентов на предмет порядочности в вопросах ведения бизнеса;</p>
                                    <p>*  Оценка финансовых и юридических рисков;</p>
                                    <p>*  Подготовка фирмы к участию в конкурсах и торгах;</p>
                                    <p>*  Составление пакета документов для получения государственных и иных грантов.</p></motion.div>
                                <motion.div custom={1}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation} className={s.description2__text}><span>Примеры сделок:</span>
                                    <p>*  Сделки M&A;</p>
                                    <p>*  Создание совместных предприятий (JV);</p>
                                    <p>*  Сделки с недвижимостью и земельными участками;</p>
                                    <p>*  Перекрестное владение активами;</p>
                                    <p>*  Рамочные договоры;</p>
                                    <p>*  Поставка, лизинг, подряд, аренда; Поручительство и гарантии;</p>
                                    <p>*  Корпоративные договоры;</p>
                                    <p>*  Опционы.</p>
                                </motion.div>
                                <motion.div custom={2}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation} className={s.description2__text}><span>Ценные бумаги:</span>
                                    <p>*  Сопровождение сделок с ценными бумагами (дарение, купля-продажа, передача в управление, мена и др.);</p>
                                    <p>*  Эмиссия акций/облигаций;</p>
                                    <p>*  Сопровождение процедур выкупа ценных бумаг;</p>
                                    <p>*  Содействие при проведении аудиторской деятельности;</p>
                                    <p>*  Сопровождение сделок с паями инвестиционных фондов.</p>
                                </motion.div>
                            </motion.div>
                        </div>
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
