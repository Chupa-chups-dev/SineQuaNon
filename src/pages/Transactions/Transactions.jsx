import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './Transactions.module.scss'
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
                            <h5>Pacta sunt servanda (от лат. «Договоры должны исполняться»). Мы осуществляем юридическое сопровождение сделок для наших клиентов: международные контракты, в том числе поставка товаров, сложные конструкции в сделках финансирования, перекрестное владение активами и безденежные передачи активов, мы также разрабатываем комплекты типовой документации под задачи клиентов: рамочные договоры, поставка, лизинг, подряд, аренда, поручительства и гарантии, оказываем юридическую поддержку заемщикам при заключении кредитно-обеспечительной документации.</h5>
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
                                    variants={textAnimation} className={s.description2__text}>Обеспечение крепкого юридического тыла в процессе инициации и осуществлении сделок различного плана - это то, чем наши эксперты занимаются каждый день. Мы ориентированы на повышение ценности сделок и можем помочь в успешном их завершении на любом этапе.</motion.div>
                                <motion.div custom={1}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation} className={s.description2__text}>Если ваша компания стремится к быстрому развитию, расширению возможностей, повышению конкурентоспособности или сталкивается с релевантными этим процессам запросами - мы можем помочь вам безопасно и юридически эффективно пройти все этапы максимально успешно.</motion.div>
                                <motion.div custom={2}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation} className={s.description2__text}>Мы предоставляем нашим клиентам глубокий анализ юридических документов и оценку рисков, чтобы помочь им принимать обоснованные решения в процессе совершения сделок.</motion.div>
                                <motion.div custom={2}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation} className={s.description2__text}>Мы также обеспечиваем подготовку необходимых документов и проводим переговоры с другими сторонами, чтобы защитить интересы наших клиентов и добиться наилучших условий.</motion.div>
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
