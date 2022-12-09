/* style */
import styles from "../style/AboutUs.module.scss"

/* components */
import Container from "../components/Container";
import H1 from "../components/H1";
import H2 from "../components/H2";

export default function AboutUs() {
    return (
        <section id="aboutAs">
            <Container>
                <H1>O Nas</H1>
                <div className={styles.aboutUsInfo}>
                    <div className={styles.aboutUsPicture}></div>
                    <div className={styles.aboutUsTextInfo}>
                        <H2>Krótka historia naszej firmy</H2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sapiente maxime
                            porro officia? Sunt molestias tenetur inventore veniam? Ipsum consectetur maiores
                            nesciunt sint ab iure veritatis expedita? Velit ea veritatis ex ipsa rem dolore!
                            Enim itaque ullam aut iure dolorum, nemo nam perferendis exercitationem cumque quod,
                            deserunt, neque adipisci esse.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}