import styles from '../style/Container.module.scss';

const Container = (props) => {
    return (
        <div className={`
            ${styles.container}
            ${props.isAlternative && styles.secondContainer}
            ${props.tree && styles.treedContainer}
          `}>
            {props.children}
        </div>
    )
}
export default Container;