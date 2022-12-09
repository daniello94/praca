import React, { useState } from "react";
import { Link } from "react-router-dom";

/* style */
import styles from "../style/Menu.module.scss";

/* media */
import { BiMenu, BiX } from "react-icons/bi";

export default function Menu(props) {
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
    }
    return (

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
                                <a className={styles.mainItem} href="#aboutAs">
                                    O Nas
                                </a>
                            </li>
                            {props.userData && props.userData.user.role === "admin" && (
                                <li>
                                    <Link className={styles.mainItem} to="/administrationPanel">
                                        Panel administracyjny
                                    </Link>
                                </li>
                            )}
                               <li>
                                    <Link className={styles.mainItem} to="/myProject">
                                       Nasze Realizacje
                                    </Link>
                                </li>
                            {!props.userData && (
                                <li>
                                    <Link className={styles.mainItem} onClick={props.open}>
                                        Zaloguj
                                    </Link>
                                </li>
                            )}

                            {props.userData && (
                                <li>
                                    <Link className={styles.mainItem} onClick={logOut}>
                                        Wyloguj
                                    </Link>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}