import styles from '../style/H1.module.scss';
import Hr from './Hr';

const H1 = (props) => {
    return (
        <>
            <h1 className={styles.titleH1}>{props.children}</h1>
            <Hr isHr3={true} />
        </>
    )
}
export default H1;