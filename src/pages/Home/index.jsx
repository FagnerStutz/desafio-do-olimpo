import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import zeus1 from '../../assets/zeus1.png'
import styles from './style.module.css'
import BtnComecar from '../../components/elements/BtnComecar'

function Home() {

  return (

    <div>

      <div className={styles.title}>
        <h1>
          Desafio do Olimpo: Teste Seus Conhecimentos Sobre Mitologia Grega!
        </h1>

        <img src={logo} width={350} />
      </div>

      <div className={styles.txt}>
        <div className={styles.comecar}>
          <p>
            Prepare-se para uma jornada entre os deuses e heróis!
          </p>
        
          <Link to={"/quiz"}><BtnComecar text='Começar o Quiz!' /></Link>

        </div>

        <div className={styles.zeus1}>
          <img src={zeus1} width={1500} />
        </div>
      </div>

    </div>
  );
};

export default Home
