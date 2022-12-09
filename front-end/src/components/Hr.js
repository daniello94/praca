import styles from '../style/Hr.module.scss';

const Hr = (props) => {
    return (

        <hr className={`
            ${styles.hr}
            ${props.isAlternative && styles.containerSecond}
            ${props.isHr3 && styles.hr3}
         `} />
    )
}
export default Hr