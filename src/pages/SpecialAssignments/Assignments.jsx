import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './Assignments.module.scss'
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
export default function Assignments() {
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
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show" className={s.container}>
                        <div className={s.investment__title}>
                            <motion.h1
                                variants={item}
                            >Особые поручения</motion.h1>
                        </div>
                    </motion.div>
                </div>
                <div ref={bottomBlockRef}>
                    <div className={s.information}>
                        <div className='container'>
                            <h3><span>Особые поручения</span> – персональные решения для наших клиентов по личным, семейным, узкопрофильным вопросам. Доверительно, конфиденциально и профессионально.</h3>
                        </div>
                    </div>
                    <div className={s.content}>
                        <div className="container">
                            <p className={s.content__title}>Примеры особых поручений:</p>
                            <motion.ul initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }}>
                                <motion.li custom={1}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Брачные договоры и раздел активов супругов;</motion.li>
                                <motion.li custom={1}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Представительство в рамках административных и уголовных дел, включая срочные вызовы;</motion.li>
                                <motion.li custom={1}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Медиация непубличных конфликтов;</motion.li>
                                <motion.li custom={2}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Открытие счетов в иностранных банках, консультирование по вопросам ведения счетов;</motion.li>
                                <motion.li custom={2}
                                    transition={{
                                        duration: 0.5, // Время анимации
                                        ease: 'easeInOut', // Кривая анимации (в данном случае, easeInOut - плавный вход и выход)
                                    }}
                                    variants={textAnimation}>Приобретение активов в зарубежных юрисдикциях.</motion.li>
                            </motion.ul>
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
