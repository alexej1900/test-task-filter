import { ItemProps } from '../interfaces';
import style from '../styles/itemComponent.module.scss';

export default function ItemComponent ( { itemProps }  : ItemProps ) {
  return (
    <div className={style.itemBlock}>
      <div className={style.itemContentBlock}>
        <img 
          src={`${itemProps.img}`} 
          alt='Bild von ausgewähltem Stahl'
          className={style.itemImage}
        />
        <h2 className={style.itemTitle}>{itemProps.title}</h2>
      </div>
      <h3 className={style.itemSubtitle}>{itemProps.subtitle}</h3>
    </div>
  )
}