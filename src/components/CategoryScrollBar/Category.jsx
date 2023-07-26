import React, { useState, useEffect } from 'react';
import s from "./Category.module.scss"

const categories = [
    { name: 'Корпоративная Практика', url: '/CorporatePractice' },
    { name: 'Сделки', url: '/Transactions' },
    { name: 'ГЧП', url: '/Partnership' },
    { name: 'Международная практика', url: '/InternationalPractice' },
    { name: 'Особые поручения', url: '/SpecialAssignments' },
    { name: 'Команда', url: '/OurTeam' },
    { name: 'Контакты', url: '/Contacts' },
];

const Menu = () => {
    const [visibleCategories, setVisibleCategories] = useState([]);

    useEffect(() => {
        setVisibleCategories(categories.slice(0, 4));
    }, []);

    const handleScroll = (event) => {
        const { scrollTop } = event.target;
        const firstVisibleIndex = Math.floor(scrollTop / 35); // 35px (высота категории + отступы)
        setVisibleCategories(categories.slice(firstVisibleIndex, firstVisibleIndex + 4));
    };
    return (
        <div onScroll={handleScroll} visibleCategories={visibleCategories} className={s.category}>
            <div className={s.container}>
                <div className={s.menu}>
                    <div className={s.menu__content}>
                        {categories.map((category, index) => (
                            <a key={index} href={category.url}>{category.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
