import { useState } from 'react';
import FilterTableComponent from './filterTableComponent';
import TableTabComponent from './tableTabComponent';
import TitleComponent from './titleComponent';
import { FilterType } from '../interfaces';
import styles from '../styles/filterBlockComponent.module.scss';

const FILTER_PARAM: FilterType = {
  Formgebung: ["Zerspanung", "Kaltumformen", "Ziehen", "Schmieden", "Kettenherstellung"],
  Eigenschaft: ["Dehngrenze", "Zähigkeit"],
  Bearbeitung: []
}

export default function FilterBlockComponent () {
  const filterTitle = Object.keys(FILTER_PARAM);
  const [isActive, setIsActive] = useState(false);
  
  const onClickHandle = () => setIsActive(!isActive);

  return (
    <div className={styles.container}>
      <TitleComponent text="Anforderungen"/>
      <div className={styles.tableTabsBlock}>
        <TableTabComponent text="Walzstahl" active={isActive} onClick={onClickHandle}/>
        <TableTabComponent text="Blankstahl" active={!isActive} onClick={onClickHandle}/>
      </div>
      <ul>
        {filterTitle.map((filterTitle) => (
          <li className={styles.tableList} key={filterTitle}>
            <FilterTableComponent 
              filterTableName={filterTitle} 
              filterProps={FILTER_PARAM[filterTitle as keyof FilterType]}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
