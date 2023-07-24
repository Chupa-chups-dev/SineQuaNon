import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './Practice.module.scss'
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/NavSideBar/SideBar';
import { useState } from 'react';
import Uae from "../../assets/uae.jpg"
import Kazakhstan from "../../assets/Kazakhstan.jpg"
import Uzbekistan from "../../assets/Uzbekistan.jpg"
import HongKong from "../../assets/HongKong.jpg"

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

export default function Practice() {
    const [isHovered, setIsHovered] = useState(false);

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
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show" className={s.containerInvestment}>
                        <div className={s.investment__title}>
                            <motion.h1
                                variants={item}
                            >Международная практика</motion.h1>
                        </div>
                    </motion.div>
                </div>
                <div ref={bottomBlockRef}>
                    <div className={s.information__title}>
                        <div className='container'>
                            <h3><span>Локализация</span> - это процесс адаптации бизнеса к местным условиям в иной юрисдикции. Помимо создания бизнес-юнитов в новом месте, локализация также может включать юридическую поддержку запуска продукта в новом регионе, выстраивание системы международных расчетов, сопровождение сделок по приобретению активов в зарубежных юрисдикциях.</h3>
                        </div>
                    </div>
                    <div className={s.information__subtitle}>
                        <div className='container'>
                            <p>SQN оказывает услуги по локализации в следующих юрисдикциях: ОАЭ, Саудовская Аравия, Оман, Иордания, Индия, Узбекистан, Казахстан, Гонконг (Китай). Мы также сопровождаем проекты по созданию юридических лиц в оффшорных юрисдикциях по выбору клиентов (с учетом существующих санкционных ограничений).</p>
                        </div>
                    </div>
                    <div className={s.countries}>
                        <div className='container'>
                            <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }} className={s.container}>
                                <motion.div custom={1}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation} className={s.card}>
                                    <div className={s.img__box}>
                                        <img src={Uae} alt="" />
                                    </div>
                                    <div className={s.content}>
                                        <h2>ОАЭ</h2>
                                        <h3>ОАЭ является одним из наиболее динамично развивающихся регионов мира, что предоставляет бизнесу множество возможностей для роста и развития.</h3>
                                        <h4>Локализация в ОАЭ:</h4>
                                        <p>Консультации по вопросам законодательства и налогообложения ОАЭ, а также по процедуре регистрации и лицензирования бизнеса;</p>
                                        <p>Подготовка документов для регистрации компании в ОАЭ, включая оформление учредительных документов, регистрацию и получение необходимых лицензий и разрешений;</p>
                                        <p>Помощь в поиске и выборе подходящего офиса (включая flexi-desk офисы) или склада для бизнеса;</p>
                                        <p>Подготовка договоров с поставщиками, партнерами и клиентами;</p>
                                        <p>Консультации по вопросам трудового законодательства, а также помощь в оформлении рабочих виз и разрешений на работу для иностранных сотрудников;</p>
                                        <p>Получение и переоформление Emirates ID;</p>
                                        <p>Юридическая поддержка при сделках с недвижимостью и инвестициях;</p>
                                        <p>Помощь в открытии банковских счетов и обслуживании банковских операций;</p>
                                        <p>Юридическая поддержка при решении споров с государственными органами или другими компаниями в ОАЭ.</p>
                                    </div>
                                </motion.div>
                                <motion.div custom={1}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation} className={s.card}>
                                    <div className={s.img__box}>
                                        <img src={Kazakhstan} alt="" />
                                    </div>
                                    <div className={s.content}>
                                        <h2>Казахстан</h2>
                                        <h3>Казахстан – одна из немногих юрисдикций, открытых для российского капитала и транзита товаров, благодаря наличию единого таможенного пространства (ТС), а также широкой общей сухопутной границе с Россией. Русский язык является официальным. Местное законодательство имеет высокую степень преемственности от норм российского права.</h3>
                                        <h4>Локализация в Казахстане:</h4>
                                        <p>Консультации по вопросам местного законодательства, включая вопросы регистрации и ведения бизнеса;</p>
                                        <p>Подготовка документов для регистрации компании в Казахстане, включая оформление учредительных документов, регистрацию и получение необходимых разрешений;</p>
                                        <p>Помощь в поиске и выборе подходящего офиса или склада для бизнеса;</p>
                                        <p>Подготовка договоров с поставщиками, партнерами и клиентами, включая международные поставки и дилерские контракты;</p>
                                        <p>Помощь в открытии банковских счетов и обслуживании банковских операций;</p>
                                        <p>Помощь в локализации на территории свободных экономических зон Казахстана;</p>
                                        <p>Юридическая поддержка при решении споров с государственными органами или другими компаниями в Казахстане.</p>
                                    </div>
                                </motion.div>
                                <motion.div custom={1}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation} className={s.card}>
                                    <div className={s.img__box}>
                                        <img src={Uzbekistan} alt="" />
                                    </div>
                                    <div className={s.content}>
                                        <h2>Узбекистан</h2>
                                        <h3>Узбекистан – наиболее дружественная к России юрисдикция в Центральной Азии, имеющая к тому же динамично развивающуюся экономику при низкой базе, что обеспечивает кратные показатели роста в бизнесе в текущих условиях.</h3>
                                        <h4>Локализация в Узбекистане:</h4>
                                        <p>Консультации по вопросам местного законодательства, включая вопросы регистрации и ведения бизнеса;</p>
                                        <p>Подготовка документов для регистрации компании в Узбекистане, включая оформление учредительных документов, регистрацию и получение необходимых разрешений;</p>
                                        <p>Помощь в поиске и выборе подходящего офиса или склада для бизнеса;</p>
                                        <p>Подготовка договоров с поставщиками, партнерами и клиентами, включая международные поставки и дилерские контракты;</p>
                                        <p>Помощь в открытии банковских счетов и обслуживании банковских операций;</p>
                                        <p>Юридическая поддержка при решении споров с государственными органами или другими компаниями в Узбекистане.</p>
                                    </div>
                                </motion.div>
                                <motion.div custom={2}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation} className={s.card}>
                                    <div className={s.img__box}>
                                        <img src={Uae} alt="" />
                                    </div>
                                    <div className={s.content}>
                                        <h2>Индия</h2>
                                        <h3>Индия – 6-ая экономика мира по ВВП. Индия имеет колоссальный внутренний рынок, сложившуюся правовую базу на основе английского права, а также опыт международной торговли и осуществления финансовых операций.</h3>
                                        <h4>Локализация в Индии:</h4>
                                        <p>Консультации по вопросам местного законодательства, включая вопросы регистрации и ведения бизнеса;</p>
                                        <p>Налоговый консалтинг и структурирование финансовых потоков;</p>
                                        <p>Разработка юридических структур под нужды бизнеса в Индии, включая использование номинальных директоров и акционеров;</p>
                                        <p>Подготовка документов для регистрации компании в Индии, включая оформление учредительных документов, регистрацию и получение необходимых разрешений;</p>
                                        <p>Помощь в поиске и выборе подходящего офиса или склада для бизнеса;</p>
                                        <p>Подготовка договоров с поставщиками, партнерами и клиентами, включая международные поставки и дилерские контракты;</p>
                                        <p>Помощь в открытии банковских счетов и обслуживании банковских операций;</p>
                                        <p>Юридическая поддержка при решении споров с государственными органами или другими компаниями в Индии.</p>
                                    </div>
                                </motion.div>
                                <motion.div custom={2}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation} className={s.card}>
                                    <div className={s.img__box}>
                                        <img src={HongKong} alt="" />
                                    </div>
                                    <div className={s.content}>
                                        <h2>Гонконг (Китай)</h2>
                                        <h3>Ведущий мировой финансовый центр, имеющий устойчивое правовое регулирование. Гонконг, являясь самостоятельным звеном в международной торговле, имеет тесные связи как с материковым Китаем, так и с финансовыми рынками Азии и Запада, что позволяет бизнесу достигать самых амбициозных целей.</h3>
                                        <h4>Локализация в Гонконге:</h4>
                                        <p>Консультации по вопросам местного законодательства, включая вопросы регистрации и ведения бизнеса;</p>
                                        <p>Налоговый консалтинг и структурирование финансовых потоков;</p>
                                        <p>Разработка юридических структур под нужды бизнеса в Гонконге, включая использование номинальных директоров и акционеров;</p>
                                        <p>Подготовка документов для регистрации компании в Гонконге, включая оформление учредительных документов, регистрацию и получение необходимых разрешений;</p>
                                        <p>Помощь в поиске и выборе подходящего офиса, включая flexi-desk офисы;</p>
                                        <p>Подготовка договоров с поставщиками, партнерами и клиентами, включая международные поставки и дилерские контракты;</p>
                                        <p>Помощь в открытии банковских счетов в китайских банках.</p>
                                    </div>
                                </motion.div>
                                <motion.div custom={2}
                                            transition={{
                                                duration: 0.5, // Время анимации
                                                ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                            }}
                                            variants={textAnimation} className={s.card}>
                                    <div className={s.img__box}>
                                        <img src={Uae} alt="" />
                                    </div>
                                    <div className={s.content}>
                                        <h2>Локализация в иных юрисдикциях</h2>
                                        <h3>SQN сопровождает сделки по локализации бизнеса и в иных юрисдикциях. Опишите нам задачу вашего бизнеса, а мы подготовим подходящее решение.</h3>
                                        <Link to="/Contacts">Контакты</Link>
                                    </div>
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
