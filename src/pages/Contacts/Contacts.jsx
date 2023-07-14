import React, { useState } from 'react'
import { motion } from 'framer-motion'
import s from './Contacts.module.scss'
import axios from 'axios';
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

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comment: '',
    dataProcessingConsent: false,
};

export default function Contacts() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [dataProcessingConsent, setDataProcessingConsent] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        const formattedValue = formatPhoneNumber(value);
        setPhoneNumber(formattedValue);
    };

    const formatPhoneNumber = (value) => {
        const cleanedValue = value.replace(/\D/g, '');

        let maskedValue = '+_(___) ___-__-__';

        let digitIndex = 0;
        for (let i = 0; i < maskedValue.length; i++) {
            if (maskedValue[i] === '_' && digitIndex < cleanedValue.length) {
                maskedValue = maskedValue.slice(0, i) + cleanedValue[digitIndex] + maskedValue.slice(i + 1);
                digitIndex++;
            }
        }

        return maskedValue;
    };

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneNumberRegex = /^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        return phoneNumberRegex.test(phoneNumber);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
            const { selectionStart, selectionEnd } = event.target;

            if (
                selectionStart === selectionEnd &&
                selectionStart > 0 &&
                phoneNumber[selectionStart - 1] &&
                phoneNumber[selectionStart - 1] === '7'
            ) {
                const updatedNumber = phoneNumber.slice(0, selectionStart - 2) + phoneNumber.slice(selectionStart - 1);
                setPhoneNumber(updatedNumber);
                event.preventDefault();
            }
        }
    };

    const handleInvalidPhone = (event) => {
        const isValid = isValidPhoneNumber(event.target.value);
        if (!isValid) {
            event.target.setCustomValidity('Пожалуйста, введите корректный номер телефона в формате +7(XXX) XXX-XX-XX.');
        } else {
            event.target.setCustomValidity('');
        }
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };
    const handleInvalidEmail = (event) => {
        const email = event.target.value;
        const isValid = isValidEmail(email);

        if (!isValid) {
            event.target.setCustomValidity('Пожалуйста, введите корректный email.');
        } else {
            event.target.setCustomValidity('');
        }
    };
    const handleInvalidFirstName = (event) => {
        event.target.setCustomValidity('Пожалуйста, заполните поле.');
    };
    const handleInvalidLastName = (event) => {
        event.target.setCustomValidity('Пожалуйста, заполните поле.');
    };

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:3001/send-email', { to, lastName, firstName, subject, text, phoneNumber, comment, email })
            .then((response) => {
                console.log(response.data);
                setFirstName(initialValues.firstName);
                setLastName(initialValues.lastName);
                setEmail(initialValues.email);
                setComment(initialValues.comment);
                setPhoneNumber(initialValues.phone);
                setDataProcessingConsent(initialValues.dataProcessingConsent);
            })

            .catch((error) => {
                console.log(error);
            });
    };




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
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className={s.contacts}>
                <div className={s.contacts__container}>
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
                                }}
                            />
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

                    <div className={s.map}>
                        <div className="container">
                            <div className={s.coordinates}>
                                <motion.div custom={1} variants={textAnimation} className={s.coordinates__inf}>
                                    <h5>Офис в Москве</h5>
                                    <div>E-mail: <a href="mailto:">info@sqn-law.ru</a></div>
                                    <div>Tel.: <a href="tel:+74997058878">+7 499 705 88 78</a></div>
                                    <div>2023 © ООО "SineQuaNon"</div>
                                </motion.div>
                                <motion.div custom={2} variants={textAnimation} className={s.coordinates__map}>
                                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b073049f4f5f5e1e631bc819ce518315021a6c05497663bc4df416dd4305c38&amp;source=constructor" width="660" height="400" frameborder="0"></iframe>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className={s.line}></div>
                    <div className={s.map}>
                        <div className="container">
                            <div className={s.coordinates}>
                                <motion.div custom={3} variants={textAnimation} className={s.coordinates__map}>
                                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b073049f4f5f5e1e631bc819ce518315021a6c05497663bc4df416dd4305c38&amp;source=constructor" width="660" height="400" frameborder="0"></iframe>
                                </motion.div>
                                <motion.div custom={4} variants={textAnimation} className={s.coordinates__inf}>
                                    <h5>Офис в Санкт-Петербурге</h5>
                                    <div>E-mail: <a href="mailto:">info@sqn-law.ru</a></div>
                                    <div>Tel.: <a href="tel:+74997058878">+7 499 705 88 78</a></div>
                                    <div>2023 © ООО "SineQuaNon"</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </motion.div>
                <div className={s.formContact}>
                    <div className="container">
                        <h4 className={s.formContact__title}>Чтобы отправить нам сообщение, пожалуйста, заполните форму ниже:</h4>
                        <form onSubmit={handleSubmit}>
                            {/* <div>
                        <input className={s.input} onBlur={fetchCompanyName} onInvalid={handleInvalidInn} pattern="^\d{10}$" type="text" placeholder='ИНН' name="inn" value={inn} onChange={(e) => setInn(e.target.value)} required />
                    </div> */}
                            {/* <div>
                        <input className={s.input} type="text" name="companyName" placeholder='Название компании:' value={companyName} readOnly />
                    </div> */}
                            <div className={s.inputContainer}>
                                <div>
                                    <label>Имя</label>
                                    <input className={s.input} onInvalid={handleInvalidFirstName} pattern="[A-Za-zА-Яа-яЁё\s]*[A-Za-zА-Яа-яЁё\s]+" type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                </div>
                                <div>
                                    <label>Фамилия</label>
                                    <input className={s.input} onInvalid={handleInvalidLastName} pattern="[A-Za-zА-Яа-яЁё\s]*[A-Za-zА-Яа-яЁё\s]+" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                            </div>
                            <div className={s.inputContainer}>
                                <div>
                                    <label>Email</label>
                                    <input className={s.input} onInvalid={handleInvalidEmail} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div>
                                    <label>Телефон</label>
                                    <input
                                        className={s.input}
                                        type="tel"
                                        onChange={(e) => {
                                            setPhoneNumber(e.target.value);
                                            handleInputChange(e);
                                        }}
                                        onInvalid={handleInvalidPhone}
                                        onKeyDown={handleKeyDown}
                                        placeholder="+7 (___) ___-__-__"
                                        name="phone"
                                        value={phoneNumber}
                                    />
                                </div>
                            </div>
                            <div className={s.textarea}>
                                <label>Сообщение</label>
                                <textarea as="textarea" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                            </div>

                            <div className={s.checkbox}>
                                <input className={s.checkboxInput} type="checkbox" checked={dataProcessingConsent} onChange={(e) => setDataProcessingConsent(e.target.checked)} id='checkbox' name="dataProcessingConsent" required />
                                <label htmlFor="checkbox">Я согласен с обработкой моих данных в соответствии с требованиями Sine Qua Non</label>
                            </div>
                            <div className={s.button} >
                                <button type="submit" >
                                    Отправить
                                </button>
                            </div>
                            {/* <div className={s.checkbox}>
                        <input type="checkbox" checked={informationConsent} onChange={(e) => setInformationConsent(e.target.checked)} name="informationConsent" required />
                        {t('Igive')}{t('informationMaterials')}
                    </div> */}
                        </form>
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
