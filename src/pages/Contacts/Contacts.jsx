import React from 'react'
import { motion } from 'framer-motion'
import s from './Contacts.module.scss'
import SideBar from '../../components/NavSideBar/SideBar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

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

export default function Contacts() {
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
                className={s.contacts}>
                <div className={s.contacts__container}>
                    <div className={s.Bg}></div>
                    <button onClick={scrollToBottom} className="arrow">
                        <svg class="w-5 h-5 xl:w-6 xl:h-6" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g>
                                <polygon points="0 0 0 21.38 18 36 36 21.38 36 0 29.25 0 29.25 18 18 27 6.75 18 6.75 0 0 0" fill="#ffffff"></polygon>
                            </g>
                        </svg>
                    </button>
                    <div className={s.container}>
                        <div className={s.contacts__title}>
                            <motion.h1 custom={1} variants={textAnimation}>Контакты</motion.h1>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    ref={bottomBlockRef} className={s.address}>
                    <div className="container">
                        <div className={s.coordinates}>
                            <motion.div  custom={1} variants={textAnimation} className={s.coordinates__inf}>
                                <h5>Офис в Москве</h5>
                                <div>E-mail: <a href="mailto:">info@sqn-law.ru</a></div>
                                <div>Tel.: <a href="tel:+74997058878">+7 499 705 88 78</a></div>
                                <div>2023 © ООО "SineQuaNon"</div>
                            </motion.div>
                            <motion.div  custom={2} variants={textAnimation} className={s.coordinates__map}>
                                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b073049f4f5f5e1e631bc819ce518315021a6c05497663bc4df416dd4305c38&amp;source=constructor" width="660" height="400" frameborder="0"></iframe>
                            </motion.div>
                        </div>
                        <div className={s.line}></div>
                        <div className={s.coordinates}>
                            <motion.div  custom={3} variants={textAnimation} className={s.coordinates__map}>
                                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b073049f4f5f5e1e631bc819ce518315021a6c05497663bc4df416dd4305c38&amp;source=constructor" width="660" height="400" frameborder="0"></iframe>
                            </motion.div>
                            <motion.div  custom={4} variants={textAnimation} className={s.coordinates__inf}>
                                <h5>Офис в Санкт-Петербурге</h5>
                                <div>E-mail: <a href="mailto:">info@sqn-law.ru</a></div>
                                <div>Tel.: <a href="tel:+74997058878">+7 499 705 88 78</a></div>
                                <div>2023 © ООО "SineQuaNon"</div>
                            </motion.div>
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
