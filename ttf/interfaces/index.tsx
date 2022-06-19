export interface ItemData {
  id: number,
  img: string,
  title: string,
  subtitle?: string,
  Zerspanung?: string,
  Ziehen?: string,
  Kettenherstellung?: string,
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

export interface FilterType {
  [key: string]: string[]
}
