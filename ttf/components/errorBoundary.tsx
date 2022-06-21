import Link from "next/link";
import styles from '../styles/home.module.scss';

export default function ErrorBoundary () {
  return (
    <>
    <div className={styles.container}>
      <h1>Server ERROR</h1>

      <Link href={'/'} >
        <button className={styles.button}>Zur Hauptseite</button>
      </Link>
    </div>
    </>
  )
}
