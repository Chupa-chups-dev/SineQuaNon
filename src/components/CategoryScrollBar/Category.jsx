import React, { useState, useEffect } from 'react';
import s from "./Category.module.scss"
import { Link } from 'react-router-dom'
import CorporatePractice from "./../../assets/Corporate_PracticeBg.JPG"
import Transactions from "./../../assets/TransactionsBg.jpg"
import Partnership from "./../../assets/Public-privatePartnership.jpg"
import InternationalPractice from "./../../assets/International_practiceBg.jpg"
import SpecialAssignments from "./../../assets/SpecialAssignments.WEBP"
import Contacts from "./../../assets/ContactsBg.jpg"

const categories = [
    { name: 'Корпоративная Практика', url: '/CorporatePractice' },
    { name: 'Сделки', url: '/Transactions' },
    { name: 'ГЧП', url: '/Partnership' },
    { name: 'Международная практика', url: '/InternationalPractice' },
    { name: 'Особые поручения', url: '/SpecialAssignments' },
    { name: 'Команда', url: '/OurTeam' },
];

const Menu = ({ bottomBlockRef }) => {
    return (
        <div  ref={bottomBlockRef} className={s.category}>
            <div className={s.menu}>
                <Link to="/CorporatePractice">
                    <div>
                        <h2>
                            Корпоративная Практика
                        </h2>
                    </div>
                    <img src={CorporatePractice} alt="" />
                </Link>
                <Link to="/Transactions">
                    <div>
                        <h2>
                            Сделки
                        </h2>
                    </div>
                    <img src={Transactions} alt="" />
                </Link>
                <Link to="/Partnership">
                    <div>
                        <h2>
                            ГЧП
                        </h2>
                    </div>
                    <img src={Partnership} alt="" />
                </Link>
                <Link to="/InternationalPractice">
                    <div>
                        <h2>
                            Международная практика
                        </h2>
                    </div>
                    <img src={InternationalPractice} alt="" />
                </Link>
                <Link to="/SpecialAssignments">
                    <div>
                        <h2>
                            Особые поручения
                        </h2>
                    </div>
                    <img src={SpecialAssignments} alt="" />
                </Link>
                <Link to="/Contacts">
                    <div>
                        <h2>
                            Контакты
                        </h2>
                    </div>
                    <img src={Contacts} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Menu;
