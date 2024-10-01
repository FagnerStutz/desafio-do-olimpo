import logo from '../../assets/logo.png'
import zeus2 from '../../assets/zeus2.png'
import styles from './style.module.css'
import BtnProximo from '../../components/elements/BtnProximo'

function Quiz() {
    return(

        <div>

            <div className={styles.quizHeader}>
                <BtnProximo link='https://google.com' text='Próxima' />
                <img src={logo} width={350} />
            </div>

            <div className={styles.body}>
                <div className={styles.quiz}>
                    <h1>Quem é o senhor dos mares?</h1>
                    
                    <div className={styles.options}>
                        <button>Zeus</button>
                        <button>Poseidon</button>
                        <button>Ares</button>
                        <button>Netuno</button>
                    </div>

                    <div className={styles.footerScore}>
                        <p>10/10</p>
                        <input type="text"/>
                        <p>Pontuação Total</p>
                    </div>
                </div>

                <div className={styles.zeus2}>
                    <img src={zeus2} width={600} />
                </div>
            </div>

        </div>
    );
};

export default Quiz