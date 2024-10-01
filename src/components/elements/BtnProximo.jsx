import styles from './BtnProximo.module.css'

function BtnProximo ({text, link}){
    return(
        <div>
            <a href={link}>
                <button className={styles.btnP}> {text} </button>
            </a>
        </div>    
    )
}

export default BtnProximo
