import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import s from './Transactions.module.scss'
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/NavSideBar/SideBar';

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

export default function Transactions() {
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
                                custom={1} variants={textAnimation}
                            >Сделки</motion.h1>
                        </div>
                    </div>
                </div>
                <div ref={bottomBlockRef} className="container">
                    <div className={s.description1}>
                        <h5><span>Pacta sunt servanda</span> (от лат. «Договоры должны исполняться»). Мы осуществляем юридическое сопровождение сделок для наших клиентов: международные контракты, в том числе поставка товаров, сложные конструкции в сделках финансирования, перекрестное владение активами и безденежные передачи активов, мы также разрабатываем комплекты типовой документации под задачи клиентов: рамочные договоры, поставка, лизинг, подряд, аренда, поручительства и гарантии, оказываем юридическую поддержку заемщикам при заключении кредитно-обеспечительной документации.</h5>
                    </div>
                    <div className={s.description2}>
                        <div className={s.description2__container1}>
                            <h5>Обеспечение крепкого юридического тыла в процессе инициации и осуществлении сделок различного плана - это то, чем наши эксперты занимаются каждый день. Мы ориентированы на повышение ценности сделок и можем помочь в успешном их завершении на любом этапе.  </h5>
                            <h5>Если ваша компания стремится к быстрому развитию, расширению возможностей, повышению конкурентоспособности или сталкивается с релевантными этим процессам запросами - мы можем помочь вам безопасно и юридически эффективно пройти все этапы максимально успешно.</h5>
                        </div>
                        <div className={s.description2__container2}>
                            <h5>Мы предоставляем нашим клиентам глубокий анализ юридических документов и оценку рисков, чтобы помочь им принимать обоснованные решения в процессе совершения сделок. Мы также обеспечиваем подготовку необходимых документов и проводим переговоры с другими сторонами, чтобы защитить интересы наших клиентов и добиться наилучших условий.</h5>
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
