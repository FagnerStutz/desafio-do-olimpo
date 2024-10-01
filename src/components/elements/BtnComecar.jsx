import styles from './BtnComecar.module.css'

function BtnComecar ({text, link}){
    return(
        <div>
            <a href={link}>
                <button  className={styles.btnC}> {text} </button>
            </a>
        </div>    
    )
}

export default BtnComecar