import { useState } from 'react';
import { useDispatch } from 'react-redux';
import QualityListComponent from './qualityListComponent';
import { FilterProps } from '../interfaces';
import style from '../styles/filterTableComponent.module.scss';

export default function FilterTableComponent ( { filterTableName, filterProps }: FilterProps ) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReset, setIsReset] = useState('');
  const dispatch = useDispatch();

  const onClickHandle = () => setIsOpen(!isOpen);

  const onCloseClickHandle = () => {
    setIsReset('');
    setTimeout(() => setIsReset('1'), 300);

    filterTableName === 'Formgebung' && dispatch({type: 'RESET_FORMGEBUNG_FILTER'});
    filterTableName === 'Eigenschaft' && dispatch({type: 'RESET_EIGENSCHAFT_FILTER'});
  }

  const onQualityClickHandle = (item: string, quality: string | null) => {
    dispatch({type: 'ADD_FILTER', payload: {[item]: quality}});
  }

  return (
    <div className={style.filterTable}>
      <div className={style.filterTableHeader}>
        <div className={style.filterTableArrow} onClick={onClickHandle}>
          {isOpen 
            ? <button className={style.filterTableArrowSign}>&#8249;</button> 
            : <button className={style.filterTableArrowSign}>&#8250;</button>
          }
          <h2 className={style.filterTableName}>{filterTableName}</h2>
        </div>
        <div className={style.filterTableTab}>Gut</div>
        <div className={style.filterTableTab}>Sehr Gut</div>
        <div className={style.filterTableTab}>Extra</div>
      </div>
      {isOpen ? (
        <>
          <ul className={style.filterTableList}>
            {filterProps.map((item) => (
              <li className={style.filterTableBody} key={item}>
                <h2 className={style.filterTableTitle}>{item}</h2>
                <QualityListComponent onClick={onQualityClickHandle} item={item} reset={isReset}/>
              </li>
            ))}
          </ul>
            <div className={style.filterTableReset}>
              <p className={style.filterTableResetText}>Auswahl löschen</p>
              <button className={style.filterTableResetButton} onClick={onCloseClickHandle}>
                &times;
              </button>
            </div>
        </>
        ) : null
    }
    </div>
  )
}
