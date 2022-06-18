export interface ItemData {
  img: string,
  title: string,
  subtitle?: string,
  quality: string
}

export interface ItemProps {
  itemProps: ItemData
}

export interface FilterData {
  id: number,
  title: string,
  quality: string
}

export interface FilterProps {
  filterTableName: string,
  filterProps: FilterData[]
}
