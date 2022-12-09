/* style */
import styles from '../style/OursServices.module.scss';

/* components */
import H1 from '../components/H1';
import H2 from '../components/H2';
/* media */
import videoServices from '../media/video/heder.mp4';
import photoOne from '../media/picture/foto1.jpg';


export default function OursServices() {
    return (
        <section className={styles.sectionServices}>
            <video src={videoServices} autoPlay loop muted />


            <div className={styles.hederServices} >
                <H1>Nasze Usługi</H1>
                <div className={styles.sectionServicesText}>
                    <div className={styles.servicesOur}>
                        <H2>Usługa 1</H2>
                        <img src={photoOne} alt="services" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat autem rem facere ut earum
                            doloribus corporis repellendus sunt consequatur. Est nostrum libero impedit nisi quo, enim numquam dolorem?
                            Maiores, laboriosam!</p>
                    </div>

                    <div className={styles.servicesOur}>
                        <H2>Usługa 2</H2>
                        <img src={photoOne} alt="services" />

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat autem rem facere ut earum
                            doloribus corporis repellendus sunt consequatur. Est nostrum libero impedit nisi quo, enim numquam dolorem?
                            Maiores, laboriosam!</p>
                    </div>

                    <div className={styles.servicesOur}>
                        <H2>Usługa 3</H2>
                        <img src={photoOne} alt="services" />

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat autem rem facere ut earum
                            doloribus corporis repellendus sunt consequatur. Est nostrum libero impedit nisi quo, enim numquam dolorem?
                            Maiores, laboriosam!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}