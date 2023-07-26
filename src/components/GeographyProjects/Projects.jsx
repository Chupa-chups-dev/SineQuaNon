import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import s from './Projects.module.scss';
import map from './../../assets/map.png';
import place from './../../assets/place.svg';


const container = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemMap = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Projects({ bottomBlockRef }) {
    const projectsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!projectsRef.current) return;

            const rect = projectsRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const isInViewport = rect.top < windowHeight && rect.bottom >= 0;

            setIsVisible(isInViewport);
        };

        // Присоединяем слушателя события прокрутки
        window.addEventListener('scroll', handleScroll);

        // Проверяем видимость блока при монтировании компонента
        handleScroll();

        // Отключаем слушателя события прокрутки при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div
            ref={bottomBlockRef}
            className={s.projects}>
            <div

                initial="hidden"
                animate="show" className="container">
                <h2>ГЕОГРАФИЯ ПРОЕКТОВ</h2>
                <motion.div
                    ref={projectsRef}
                    variants={container}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    viewport={{ amount: 0 }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                    className={s.map__container}
                >
                    <motion.img transition={{ duration: 0.5, ease: 'easeInOut' }}  variants={itemMap} className={s.map} src={map} alt="" />
                    <motion.div transition={{ duration: 1, ease: 'easeInOut' }} variants={item} className={s.place1}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Псковская область:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </motion.div>

                    <motion.div transition={{ duration: 1.1, ease: 'easeInOut' }} variants={item} className={s.place2}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Московская область:</span> концессионные проекты в сферах теплоснабжения, ТКО, фото-видео фиксации.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 1.2, ease: 'easeInOut' }} variants={item} className={s.place3}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Карелия:</span> Представление интересов клиента при подаче заявки в концессионном проекте в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 1.3, ease: 'easeInOut' }} variants={item} className={s.place4}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Владимирская область:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 1.4, ease: 'easeInOut' }} variants={item} className={s.place5}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Мордовия:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 1.5, ease: 'easeInOut' }} variants={item} className={s.place6}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Свердловская область:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 1.6, ease: 'easeInOut' }} variants={item} className={s.place7}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>ХМАО - Югра:</span> Серия концессионных проектов в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 1.7, ease: 'easeInOut' }} variants={item} className={s.place8}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Омская область:</span> Серия концессионных проектов в сфере ТКО. Сопровождение регионального оператора в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 1.8, ease: 'easeInOut' }} variants={item} className={s.place9}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>ЯНАО:</span> серия концессионных проектов в сфере ТКО, сопровождение региональных операторов в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 1.9, ease: 'easeInOut' }} variants={item} className={s.place10}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Алтай:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 2, ease: 'easeInOut' }} variants={item} className={s.place11}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Хакасия:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 2.1, ease: 'easeInOut' }} variants={item} className={s.place12}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Саха (Якутия):</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 2.2, ease: 'easeInOut' }} variants={item} className={s.place13}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Амурская область:</span> Концессионные проекты в социальной сфере, сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 2.3, ease: 'easeInOut' }} variants={item} className={s.place14}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Новосибирская область:</span> концессионный проект в сфере ТКО. Сопровождение регионального оператора в сфере ТКО.</p>
                        </div>
                    </motion.div>
                    <motion.div transition={{ duration: 2.4, ease: 'easeInOut' }} variants={item} className={s.place15}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Сахалин:</span> Концессионные проекты в социальной сфере, ТКО.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
