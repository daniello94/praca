import styles from '../style/H2.module.scss';
import Hr from './Hr';

const H2 = (props) => {
    return (
        <>
            <h2 className={styles.titleH2}>{props.children}</h2>
            <Hr isAlternative={true} />
        </>
    )
}
export default H2;