import styles from '../style/Error.module.scss';

const Error =(props)=>{
    return(
        <div className={`${styles.error} ${props.isAlternative && styles.correctError}`}>
            {props.children}
        </div>
    )
}
export default Error;