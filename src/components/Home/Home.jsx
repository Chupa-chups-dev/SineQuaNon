import React, { useState } from 'react'
import { motion } from 'framer-motion'
import s from './Home.module.scss'
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


export default function Home({ bottomBlockRef }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const scrollToBottom = () => {
    bottomBlockRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div
      className={s.home}
    >
      <div className={s.homeBg}></div>

      <motion.div variants={container}
        initial="hidden"
        animate="show" className="container">
        <motion.h1 variants={item} className={s.home__title}>Sine Qua Non</motion.h1>
        {/* <motion.p custom={2} variants={textAnimation} className={s.home__subtitle}>Юридическая фирма, которая предлагает индивидуальные решения</motion.p>
        <motion.p custom={3} variants={textAnimation} className={s.home__inf}>Комплексное сопровождение проектов и отдельных сделок: проектное финансирование, ГЧП, корпоративные и инвестиционные сделки</motion.p> */}
      </motion.div>
      <button onClick={scrollToBottom} className={s.arrow}>
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
    </div>
  )
}
