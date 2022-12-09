import styles from '../style/Button.module.scss';

const Button = (props) => {

    return (
        <button className={`
            ${styles.btn}
            ${props.isAlternative && styles.btn2} 
            ${props.isBtn3 && styles.btn3}
         `}
            onClick={props.onClick}>{props.children}</button>
    )
}
export default Button