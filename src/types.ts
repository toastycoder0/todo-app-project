export interface Item {
  id: string
  name: string
  checked: boolean
}

export interface ItemsStore {
  items: Item[]
  onAddItem: (item: Item) => void
  onCheckItem: (id: string) => void
  onDeleteItem: (id: string) => void
  onClearCompleteItems: () => void
}
