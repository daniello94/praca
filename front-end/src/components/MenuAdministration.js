import React, { useState } from "react";
import { Link } from "react-router-dom";

/* style */
import styles from '../style/MenuAdministration.module.scss';

/* media */
import { BiMenu, BiX } from "react-icons/bi";



export default function MenuAdministration(props) {
    const [isActive, setActive] = useState("open")
    const [isClose, setClose] = useState('close');

    const logOut = () => {
        localStorage.clear();
        setInterval();
    };

    const onOpen = () => {
        setActive('open')
        setClose('close')
    }
    const onClose = () => {
        setClose('mobileHamburger')
        setActive('close')
    };
 
    return (
        
        <div>
            <nav className={styles.mainNav}>
                <div className={styles.container}>
                    <div className={styles.mainNavHolder}>
                        <div className={styles[isClose]} onClick={() => onOpen()}>
                            <BiMenu className={styles.iconOpen} />
                        </div>
                        <div className={styles[isActive]}>
                            <div className={styles.closeMobileHamburger} onClick={() => onClose()}>
                                <BiX className={styles.iconClose} />
                            </div>
                            <ul className={styles.menu}>
                                <li>
                                    <Link className={styles.mainItem} to="/">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <span className={styles.mainItem} onClick={()=>props.stanValue('message')} >
                                        Wiadomosći
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.mainItem} onClick={()=>props.stanValue('gallery')} >
                                        Dodaj projekt
                                    </span>
                                </li>

                                <li>
                                    <Link className={styles.mainItem} onClick={logOut} to={'/'}>
                                        Wyloguj
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}