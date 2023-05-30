import React from 'react'
import { motion } from 'framer-motion'
import s from './Home.module.scss'

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

export default function Home({bottomBlockRef}) {
  const scrollToBottom = () => {
    bottomBlockRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={s.home}
    >
      <div className={s.homeBg}></div>
      <button onClick={scrollToBottom} className="arrow">
        <svg class="w-5 h-5 xl:w-6 xl:h-6" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
          <g>
            <polygon points="0 0 0 21.38 18 36 36 21.38 36 0 29.25 0 29.25 18 18 27 6.75 18 6.75 0 0 0" fill="#ffffff"></polygon>
          </g>
        </svg>
      </button>
      <div className="container">
        <motion.h1 custom={1} variants={textAnimation} className={s.home__title}><span>Sine Qua Non</span>
          <br /> - проводник бизнеса в достижении смелых и амбициозных целей</motion.h1>
        <motion.p custom={2} variants={textAnimation} className={s.home__subtitle}>Юридическая фирма, которая предлагает индивидуальные решения!!!</motion.p>
        <motion.p custom={3} variants={textAnimation} className={s.home__inf}>Комплексное сопровождение проектов и отдельных сделок: проектное финансирование, ГЧП, корпоративные и инвестиционные сделки</motion.p>
      </div>
    </motion.div>
  )
}
