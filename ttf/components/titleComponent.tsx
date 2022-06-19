import style from '../styles/title.module.scss';

export default function TitleComponent ( {text}: {text: string}) {
  return (
    <h1 className={style.title}>{ text }</h1>
  )
}
