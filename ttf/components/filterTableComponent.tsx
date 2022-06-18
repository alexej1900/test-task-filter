import { useState } from 'react';
import { FilterProps } from '../interfaces';
import style from '../styles/filterTableComponent.module.scss';

export default function FilterTableComponent ( { filterTableName, filterProps }  : FilterProps ) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={style.filterTable}>
      <div className={style.filterTableHeader}>
        <div className={style.filterTableArrow}>
          {isOpen ? <div>&and;</div> : <div>&or;</div>}
        </div>
        <h2 className={style.filterTableName}>{filterTableName}</h2>
        <div className={style.filterTableTab}>Gut</div>
        <div className={style.filterTableTab}>Sehr Gut</div>
        <div className={style.filterTableTab}>Extra</div>
      </div>
      <ul className={style.filterTableList}>
        {filterProps.map((item) => (
          <li className={style.filterTableBody} key={item.id}>
            <h2 className={style.filterTableTitle}>{item.title}</h2>
            <div className={style.filterTableCell}>+</div>
            <div className={style.filterTableCell}>++</div>
            <div className={style.filterTableCell}>+++</div>
          </li>
        ))}
      </ul>
      <div className={style.filterTableReset}>
        <p className={style.filterTableResetText}>Auswahl löschen</p>
        <div className={style.filterTableResetButton}>&times;</div>
      </div>
    </div>
  )
}