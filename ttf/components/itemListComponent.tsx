import { ItemData } from '../interfaces';
import ItemComponent from './itemComponent';
import TitleComponent from './titleComponent';
import style from '../styles/itemListComponent.module.scss';

export default function ItemListComponent ({itemData}: {itemData: ItemData[]}) {
  return (
    <div className={style.container}>
      <TitleComponent text="Stahlgruppen"/>
      <div>
        <h3>Empfehlung</h3>
        <ul>
          {itemData.map((item) => (
            <ItemComponent itemProps={item} key={item.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
