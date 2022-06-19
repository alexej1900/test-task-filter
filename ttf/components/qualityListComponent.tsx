import { useEffect, useState } from 'react';
import { QualityProps, TQuality } from '../interfaces';
import style from '../styles/filterTableComponent.module.scss';

const QUALITY: TQuality = {'+': 'Gut', '++': 'Sehr Gut', '+++': 'Extra'};

export default function QualityListComponent ({reset, item, onClick}: QualityProps) {
  const [isQualityClicked, setQualityIsClicked] = useState(reset);

  const onQualityClickHandle = (quality: string) => {
    setQualityIsClicked(quality);
    onClick(item, quality);
  };

  useEffect(() => {
    setQualityIsClicked(reset);
  }, [reset]);

  return (
    <ul className={style.filterTableQuality}>
      {Object.keys(QUALITY).map((quality) => (
        <li 
          key={quality} 
          className={isQualityClicked !== QUALITY[quality as keyof TQuality]
            ? `${style.filterTableCell}` 
            : `${style.filterTableCell} ${style.filterTableCellActive}`}
        >
          <div onClick={() => onQualityClickHandle(QUALITY[quality as keyof TQuality])}>
            {quality}
          </div>
        </li>
      ))}
    </ul>
  )
}
