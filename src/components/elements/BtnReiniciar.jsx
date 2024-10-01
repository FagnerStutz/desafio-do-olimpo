import styles from './BtnReiniciar.module.css'

function BtnReiniciar ({text, link}){
    return(
        <div>
            <a href={link}>
                <button className={styles.btnR}> {text} </button>
            </a>
        </div>    
    )
}

export default BtnReiniciar