import Container from "../components/Container";
import styles from "../style/Footer.module.scss";
export default function Footer() {
    return (
        <Container tree={true}>
            <footer className={styles.footerContent}>
                <p>2022</p>
            </footer>
        </Container>
    )
}