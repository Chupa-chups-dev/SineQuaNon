import React from 'react'
import { motion } from 'framer-motion'
import s from './Team.module.scss'
import SideBar from '../../components/NavSideBar/SideBar'
import Footer from '../../components/Footer/Footer'
import Lawyer from './../../assets/photo_2021-12-14_12-28-42.jpg'

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

export default function Team() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <SideBar />
            <motion.div
                initial="hidden"
                whileInView="visible"
                className={s.team}>
                <div className="container">
                    <motion.h1 custom={1} variants={textAnimation}>Наша Команда</motion.h1>
                    <div className={s.line}></div>
                    <div className={s.lawyers}>
                        <motion.div custom={2} variants={textAnimation} className={s.lawyers__text}>
                            <h4>Юристы</h4>
                            <p>Level is made up of forward-thinking lawyers who are immersed in the industries they work within.</p>
                        </motion.div>
                        <motion.div custom={3} variants={textAnimation} className={s.lawyers__container}>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>

                        </motion.div>
                    </div>
                    <div className={s.line}></div>
                    <div className={s.lawyers}>
                        <div className={s.lawyers__text}>
                            <h4>MANAGEMENT</h4>
                        </div>
                        <div className={s.lawyers__container}>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>
                            <div>
                                <img src={Lawyer} alt="" />
                                <div></div>
                                <h3>Константин Шакко</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}
