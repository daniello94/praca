import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsImages, BsXLg } from "react-icons/bs";
/* components */
import Container from "../components/Container";
import H2 from "../components/H2";
/* style */
import styles from "../style/MyProjectHome.module.scss";
import style from "../style/MyProject.module.scss";
export default function MyProjectHome() {
    const [status, setStatus] = useState([]);
    const [gallery, setGallery] = useState({
        gallery: []
    })
    const [classActive, setClassActive] = useState('close');
    const [galleryPhoto, setGalleryPhoto] = useState('')
    const listPhoto = () => {
        axios.post('http://127.0.0.1:8080/project/all')
            .then((res) => {
                setStatus(res.data)
            })
    };

    function galleryPlan(id) {
        axios.get('http://127.0.0.1:8080/project/' + id)
            .then((res) => {
                setGallery(res.data)
            })
        setClassActive('viveGallery')
    };


    useEffect(() => {
        listPhoto()
    }, [])
    return (
        <section id='myProject'>
            <Container>
                <H2>Kilka fotek z naszych projektów</H2>
                <div className={styles.concept}>
                    {status.map((homeProject) => {
                        if (homeProject.oderStan === "Active") {
                            return (
                                <div className={styles.photo} key={homeProject._id}>
                                    <img src={'http://localhost:8080/photo/' + homeProject.hederPhoto} alt="foto profil" />
                                    <div onClick={() => {
                                        galleryPlan(homeProject._id)
                                        setGalleryPhoto(homeProject.hederPhoto)
                                    }} className={styles.imagePhoto}>
                                        <BsImages />
                                        <p>{homeProject.title}</p>
                                    </div>
                                </div>

                            )

                        }
                    })}
                </div>


            </Container>
            
            <div className={style[classActive]} >
                <div onClick={() => { setClassActive('close') }} className={style.iconClose}>
                    <BsXLg />
                </div>

                <img className={style.imgPhoto} src={'http://localhost:8080/photo/' + galleryPhoto} alt="foto profil" />

                <div className={style.position}>
                    {gallery.gallery.map((photo) => {
                        return (

                            <img key={photo._id} src={'http://localhost:8080/photo/' + photo.photo} alt="foto profil" onClick={() => {
                                setGalleryPhoto(photo.photo)
                            }} />
                        )
                    })}
                </div>
            </div>


        </section>
    )
}