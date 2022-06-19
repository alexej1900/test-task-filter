import { useEffect, useState } from 'react';
import style from '../styles/filterTableComponent.module.scss';

const QUALITY = ['+','++', '+++'];

export default function QualityListComponent ({reset}: {reset: string}) {
  const [isQualityClicked, setQualityIsClicked] = useState(reset);

  const onQualityClickHandle = (quality: string) => setQualityIsClicked(quality);

  useEffect(() => {
    setQualityIsClicked(reset);
  }, [reset]);

  return (
    <ul className={style.filterTableQuality}>
      {QUALITY.map((quality) => (
        <li 
          key={quality} 
          className={isQualityClicked !== quality
            ? `${style.filterTableCell}` 
            : `${style.filterTableCell} ${style.filterTableCellActive}`}
        >
          <div onClick={() => onQualityClickHandle(quality)}>
            {quality}
          </div>
        </li>
      ))}
    </ul>
  )
}
