import style from '../styles/tableTabComponent.module.scss';

export default function TableTabComponent ( { text, active }: {text: string; active: boolean} ) {
  return (
    <div className={active ? `${style.tabBlock}` : `${style.tabBlock} ${style.active}` }>
      {text}
    </div>
  )
}