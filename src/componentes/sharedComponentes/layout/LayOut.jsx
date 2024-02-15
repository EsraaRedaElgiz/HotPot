import styles from "./styles.module.css"
function LayOut(props) {
    const { bgcolor, ...rest } = props
    return (
        <div
            className={styles.container}
            style={{
                backgroundColor: bgcolor,
                ...rest
            }}>
            {props.children}
        </div>
    )
}
export default LayOut;