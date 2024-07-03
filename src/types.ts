export interface Item {
  id: number
  name: string
  checked: boolean
}

export interface ItemsStore {
  items: Item[]
  onAddItem: (item: Item) => void
  onCheckItem: (id: number) => void
  onDeleteItem: (id: number) => void
  onClearCompleteItems: () => void
}
