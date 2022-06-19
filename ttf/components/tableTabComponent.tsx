import style from '../styles/tableTabComponent.module.scss';

export default function TableTabComponent ( 
  { text, active, onClick }: {text: string; active: boolean, onClick: () => void} 
  ) {
  return (
    <div 
      className={active 
        ? `${style.tabBlock}` 
        : `${style.tabBlock} ${style.active}`
    }
      onClick={onClick}
    >
      {text}
    </div>
  )
}
