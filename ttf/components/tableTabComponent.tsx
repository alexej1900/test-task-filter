import Link from 'next/link';
import style from '../styles/tableTabComponent.module.scss';

export default function TableTabComponent ( 
  { text, active, onClick }: {text: string; active: boolean, onClick: () => void} 
  ) {
  return (
    <Link href={`/filter/${text.toLowerCase()}`}>
      <div 
        className={active 
          ? `${style.tabBlock}` 
          : `${style.tabBlock} ${style.active}`
      }
        onClick={onClick}
      >
        {text}
      </div>
    </Link>
    
  )
}
