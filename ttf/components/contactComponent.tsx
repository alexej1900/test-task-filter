import style from '../styles/contactComponent.module.scss';

export default function ContactComponent () {
  return (
    <div className={style.container}>
      <div>
        <img src="/Phone-logo.png" alt="contact-logo"  className={style.contactImg}/>
      </div>
      <div className={style.contactContent}>
        <h2 className={style.contactTitle}>Gerne sind wir für Sie da</h2>
        <h3 className={style.contactSubtitle}>Kontaktieren Sie unser Sales-Team</h3>
      </div>
    </div>
  )
}
