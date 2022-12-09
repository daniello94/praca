import React, { useState } from "react";

/* style */
import styles from '../style/AdministrationPanel.module.scss';

/* components */
import Container from '../components/Container';
import H1 from '../components/H1';

/* routers */
import MenuAdministration from '../components/MenuAdministration';
import Message from './Messages';
import GalleryMyWork from "./GalleryMyWork";

export default function AdministrationPanel(props) {
    const [stanVive, setStanVive] = useState('')
    console.log(props.userData.user.email);
    console.log(stanVive);
    const updateValue = (dataFromVive) => {
        setStanVive(dataFromVive)
    }
    return (
        <Container tree={true}>
            <H1>Witaj w Panelu Administracyjnym</H1>
            <Container isAlternative={true}>
                <div className={styles.menuPanel}>
                    <MenuAdministration stanValue={updateValue} />
                </div>
                <div className={styles.windows}>
                    {stanVive === 'gallery' && (
                        <GalleryMyWork />
                    )}

                    {stanVive === 'message' && (
                        <Message userData={props.userData} />
                    )}
                </div>

            </Container>
        </Container>
    )
}