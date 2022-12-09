import styles from '../style/A.module.scss';

const A = (props) => {

    return (
        <a className={`${styles.a} ${props.isAlternative && styles.a2}` }
            href={props.href}>{props.children}</a>
    )
}
export default A