import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import BtnReiniciar from '../../components/elements/BtnReiniciar'
import styles from './style.module.css'

function ResultFinal () {
    return(

        <div className={styles.resultFinal}>
            <img src={logo} width={350} />
            <h1>Parabéns!</h1>
            <div className={styles.score}>
                <span>8</span>
                <p>acertos</p>
            </div>

            <Link to={"/"}><BtnReiniciar text='Reiniciar'/></Link>
        </div>

    )
}

export default ResultFinal