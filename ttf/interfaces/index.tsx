export interface ItemData {
  id: number,
  img: string,
  title: string,
  subtitle?: string,
  Zerspanung?: string,
  Ziehen?: string,
  Kettenherstellung?: string,
  Kaltumformen?: string,
  Schmieden?: string,
  Dehngrenze?: string,
  Zähigkeit?: string
}

export interface ItemProps {
  itemProps: ItemData
}

export interface FilterProps {
  filterTableName: string,
  filterProps: string[]
}

export type FilterData = 'Gut' | 'Sehr Gut' | 'Extra';

export interface FilterStateData {
  Zerspanung: FilterData | null,
  Ziehen: FilterData | null,
  Kettenherstellung: FilterData | null,
  Dehngrenze: FilterData | null,
  Zähigkeit: FilterData | null
}

export interface FilterType {
  [key: string]: string[]
}

export interface TQuality {
  [key: string]: string
}

export interface QualityProps {
  reset: string; 
  item: string;
  onClick: (item: string, quality: string | null) => void
}
