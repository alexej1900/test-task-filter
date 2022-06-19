import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterProps } from '../interfaces';
import QualityListComponent from './qualityListComponent';
import style from '../styles/filterTableComponent.module.scss';

export default function FilterTableComponent ( { filterTableName, filterProps }: FilterProps ) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReset, setIsReset] = useState('');
  const dispatch = useDispatch();

  const onClickHandle = () => setIsOpen(!isOpen);

  const onCloseClickHandle = () => {
    setIsReset('');
    setTimeout(() => setIsReset('1'), 300);
    dispatch({type: 'RESET_FILTER'});
  }

  const onQualityClickHandle = (item: string, quality: string) => {
    dispatch({type: 'ADD_FILTER', payload: {[item]: quality}});
  }

  return (
    <div className={style.filterTable}>
      <div className={style.filterTableHeader}>
        <div className={style.filterTableArrow} onClick={onClickHandle}>
          {isOpen 
            ? <div className={style.filterTableArrowSign}>&#8249;</div> 
            : <div className={style.filterTableArrowSign}>&#8250;</div>
          }
        </div>
        <h2 className={style.filterTableName}>{filterTableName}</h2>
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
              <div className={style.filterTableResetButton} onClick={onCloseClickHandle}>&times;</div>
            </div>
        </>
        ) : null
    }
    </div>
  )
}
