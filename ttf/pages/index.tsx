import Link from 'next/link';
import styles from '../styles/home.module.scss';

const Home = () => {
  
  return (
    <div className={styles.container}>
      <Link href={'/filter/walzstahl'} >
        <button className={styles.button}>Zur Filterseite</button>
      </Link>
    </div>
  )
}

export default Home
