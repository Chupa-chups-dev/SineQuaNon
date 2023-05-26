import React from 'react'
import { Link } from 'react-router-dom'
import s from './SideBar.module.scss'
import Logo from './../../assets/Logo1.svg'

export default function SideBar() {
    const [open, setOpen] = React.useState(false)
    const [openServ, setOpenServ] = React.useState(false)
    function handleClick(e) {
        e.preventDefault();
        setOpenServ(!openServ)
    }
    return (
        <>
            <div className={s.SideBar}>
                <button className={s.burger}  onClick={() => { setOpen(!open); setOpenServ(false); }}>
                    <div className={(open ? 'transform1 line1' : 'line1')} />
                    <div className={(open ? 'transform2 line2' : 'line2')} />
                    <div className={(open ? 'transform3 line3' : 'line3')} />
                </button>
                <div className={s.logo}>
                    <img src={Logo} alt="" />
                </div>

            </div>
            <div className={!open ? s.displn : s.burger__nav}>
                <nav className={s.nav}>
                    <ul>
                        <li className={s.nav__list}><Link to="/" className={s.nav__item}>Главная</Link></li>
                        {/* <li className={s.nav__list}><Link to="/Investment" className={s.nav__item}>Инвестиции</Link></li> */}
                        <li className={s.nav__list}><Link to="/Transactions" className={s.nav__item}>Сделки</Link></li>
                        <li className={s.nav__list}><Link to="/Partnership" className={s.nav__item}>ГЧП</Link></li>
                        <li className={s.nav__list}><Link to="/InternationalPractice" className={s.nav__item}>Международная практика</Link></li>
                        <li className={s.nav__list}><Link to="/SpecialAssignments" className={s.nav__item}>Особые поручения
                            {/* <svg width="12" height="13" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.04102 6.08789L0.0078125 10.7852V9.44727L7.51758 5.53125L0.0078125 1.625V0.287109L9.04102 4.98438V6.08789Z" fill="#ffffffd9" />
                            </svg> */}
                        </Link></li>
                        <li className={s.nav__list}><Link to="/OurTeam" className={s.nav__item}>Команда</Link></li>
                        <li className={s.nav__list}><Link to="/Contacts" className={s.nav__item}>Контакты</Link></li>
                        <div className={s.socialMedia}>
                            <a href="/">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5862 0H5.41381C2.42858 0 0 2.42858 0 5.41381V14.5863C0 17.5714 2.42858 20 5.41381 20H14.5863C17.5714 20 20 17.5714 20 14.5863V5.41381C20 2.42858 17.5714 0 14.5862 0ZM9.99998 15.4686C6.98454 15.4686 4.53139 13.0154 4.53139 9.99998C4.53139 6.98454 6.98454 4.53139 9.99998 4.53139C13.0154 4.53139 15.4686 6.98454 15.4686 9.99998C15.4686 13.0154 13.0154 15.4686 9.99998 15.4686ZM15.5993 5.82106C14.7082 5.82106 13.9834 5.09627 13.9834 4.20516C13.9834 3.31405 14.7082 2.58911 15.5993 2.58911C16.4904 2.58911 17.2154 3.31405 17.2154 4.20516C17.2154 5.09627 16.4904 5.82106 15.5993 5.82106Z" fill="#ffffffbe" />
                                </svg>
                            </a>
                            <a href="/">
                                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.317173 7.90761C2.46554 6.75094 4.86369 5.78553 7.1044 4.81521C10.9593 3.22589 14.8295 1.66412 18.7388 0.210134C19.4994 -0.0375962 20.866 -0.279833 21 0.821879C20.9266 2.3814 20.6247 3.9318 20.4177 5.48219C19.8922 8.89164 19.2848 12.2894 18.6925 15.6877C18.4884 16.8196 17.0377 17.4056 16.1095 16.6812C13.8787 15.2084 11.6308 13.7498 9.42856 12.2429C8.70716 11.5264 9.37612 10.4974 10.0204 9.98575C11.8577 8.21591 13.8062 6.71222 15.5475 4.85091C16.0172 3.74225 14.6294 4.67659 14.1716 4.9629C11.6563 6.65715 9.20256 8.45484 6.55064 9.94386C5.19605 10.6727 3.61724 10.0499 2.26326 9.64317C1.04927 9.15185 -0.729718 8.65685 0.317051 7.90775L0.317173 7.90761Z" fill="#ffffffbe" />
                                </svg>
                            </a>
                            <a href="/">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0ZM15.8212 14.1213C15.58 14.8025 14.6225 15.3675 13.8587 15.5325C13.3363 15.6437 12.6537 15.7325 10.3562 14.78C7.4175 13.5625 5.525 10.5763 5.3775 10.3825C5.23625 10.1887 4.19 8.80125 4.19 7.36625C4.19 5.93125 4.91875 5.2325 5.2125 4.9325C5.45375 4.68625 5.8525 4.57375 6.235 4.57375C6.35875 4.57375 6.47 4.58 6.57 4.585C6.86375 4.5975 7.01125 4.615 7.205 5.07875C7.44625 5.66 8.03375 7.095 8.10375 7.2425C8.175 7.39 8.24625 7.59 8.14625 7.78375C8.0525 7.98375 7.97 8.0725 7.8225 8.2425C7.675 8.4125 7.535 8.5425 7.3875 8.725C7.2525 8.88375 7.1 9.05375 7.27 9.3475C7.44 9.635 8.0275 10.5937 8.8925 11.3637C10.0087 12.3575 10.9137 12.675 11.2375 12.81C11.4787 12.91 11.7662 12.8863 11.9425 12.6988C12.1663 12.4575 12.4425 12.0575 12.7238 11.6638C12.9237 11.3813 13.1763 11.3462 13.4412 11.4462C13.7113 11.54 15.14 12.2462 15.4338 12.3925C15.7275 12.54 15.9212 12.61 15.9925 12.7338C16.0625 12.8575 16.0625 13.4388 15.8212 14.1213Z" fill="#ffffffbe" />
                                </svg>
                            </a>
                        </div>
                    </ul>

                </nav>

            </div>
            <div className={!openServ ? s.displn1 : s.burger__navServ} openServ={openServ}>
                <nav className={s.navServ}>
                    <ul>
                        <li className={s.navServ__list}><a href="/" className={s.navServ__item}>Sport</a></li>
                        <li className={s.navServ__list}><a href="/" className={s.navServ__item}>Media</a></li>
                        <li className={s.navServ__list}><a href="/" className={s.navServ__item}>Film</a></li>
                        <li className={s.navServ__list}><a href="/" className={s.navServ__item}>Music</a></li>
                        <li className={s.navServ__list}><a href="/" className={s.navServ__item}>Technology</a></li>
                        <li className={s.navServ__list}><a href="/" className={s.navServ__item}>Crypto</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
