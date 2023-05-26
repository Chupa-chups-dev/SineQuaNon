import React from 'react'
import s from './Team.module.scss'
import SideBar from '../../components/NavSideBar/SideBar'
import Footer from '../../components/Footer/Footer'
import Lawyer from './../../assets/lawyer.png'

export default function Team() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <SideBar/>
        <div className={s.team}>
            <div className="container">
                <h1>Наша Команда</h1>
                <div className={s.line}></div>
                <div className={s.lawyers}>
                    <div className={s.lawyers__text}>
                        <h4>Юристы</h4>
                        <p>Level is made up of forward-thinking lawyers who are immersed in the industries they work within.</p>
                    </div>
                    <div className={s.lawyers__container}>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                       
                    </div>
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
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                        <div>
                            <img src={Lawyer} alt="" />
                            <div></div>
                            <h3>Alastair Campbell</h3>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
