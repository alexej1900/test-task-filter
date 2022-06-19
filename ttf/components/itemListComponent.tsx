import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ItemComponent from './itemComponent';
import TitleComponent from './titleComponent';
import { FilterStateData, ItemData } from '../interfaces';
import style from '../styles/itemListComponent.module.scss';

export default function ItemListComponent ({data}: {data: ItemData[]}) {
  const filterData = useSelector((state) => state) as FilterStateData;
  const [state, setState] = useState(data);
  
  useEffect(() => {
    const filterKeys = Object.keys(filterData);
    let stateData = data;
    
    filterKeys.forEach((key) => {
      if (filterData[key as keyof FilterStateData] !== null) {
        stateData = stateData.filter((item) => {
          return item[key as keyof ItemData] === filterData[key as keyof FilterStateData];
        });
      }
    });

    setState(stateData);
  }, [filterData, data]);

  return (
    <div className={style.container}>
      <TitleComponent text="Stahlgruppen"/>
      <div>
        <h3>Empfehlung</h3>
        <ul>
          {state.length !== 0 
            ? state.map((item) => (
              <ItemComponent itemProps={item} key={item.id}/>
            ))
            : <div className={style.itemBlock}>
                Es gibt keine Produkte, die den Filterparametern entsprechen
              </div>
          }
        </ul>
      </div>
      <div style={{marginTop: '50px'}}>
        <h3>Alle Produkte</h3>
        <ul>
          {data.map((item) => (
            <ItemComponent itemProps={item} key={item.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
