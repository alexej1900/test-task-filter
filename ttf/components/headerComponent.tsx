import ContactComponent from './contactComponent';
import styles from '../styles/headerComponent.module.scss';

export default function HeaderComponent () {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Unser Stahl für Ihre Anforderungen</h1>
      <div className={styles.headerRightBlock}>
        <ContactComponent/>
      <div className={styles.closeButton}>&times;</div>
      </div>
    </div>
  )
}
