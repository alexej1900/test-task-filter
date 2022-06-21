import { useEffect, useState } from 'react';
import { QualityProps, TQuality } from '../interfaces';
import style from '../styles/filterTableComponent.module.scss';

const QUALITY: TQuality = {'+': 'Gut', '++': 'Sehr Gut', '+++': 'Extra'};

export default function QualityListComponent ({reset, item, onClick}: QualityProps) {
  const [isQualityClicked, setQualityIsClicked] = useState(reset);

  const onQualityClickHandle = (quality: string) => {
    if(isQualityClicked === quality) {
      setQualityIsClicked(reset);
      onClick(item, null);
    } else {
      setQualityIsClicked(quality);
      onClick(item, quality);
    }
  };

  useEffect(() => {
    setQualityIsClicked(reset);
  }, [reset]);

  return (
    <div className={style.filterTableQuality}>
      {Object.keys(QUALITY).map((quality) => (
        <button 
          key={quality} 
          onClick={() => onQualityClickHandle(QUALITY[quality as keyof TQuality])}
          className={isQualityClicked !== QUALITY[quality as keyof TQuality]
            ? `${style.filterTableCell}` 
            : `${style.filterTableCell} ${style.filterTableCellActive}`}
        >
          {quality}
        </button>
      ))}
    </div>
  )
}
