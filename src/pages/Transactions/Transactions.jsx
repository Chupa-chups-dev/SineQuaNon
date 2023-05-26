import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './Transactions.module.scss'
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/NavSideBar/SideBar';

export default function Transactions() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const bottomBlockRef = React.useRef(null);

    const scrollToBottom = () => {
        bottomBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const textAnimation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: 'all 1s ease-in-out',
        },
    }
    return (
        <>
            <SideBar />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
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
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2 }}
                                variants={textAnimation}>Сделки</motion.h1>
                        </div>
                    </div>
                </div>
                <div ref={bottomBlockRef} className={s.category}>
                    
                </div>
                <div className={s.backToHome}>
                    <Link to="/">Вернуться на главную</Link>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}
