import type { Item, ItemsStore } from './types'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import defaultItems from './data.json'

export const itemsStore = create<ItemsStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: defaultItems,
        onAddItem: (item: Item) => {
          const items = get().items
          set({ items: [item, ...items] })
        },
        onCheckItem: (id: string) => {
          const newItems = get().items.map((item) =>
            id === item.id ? { ...item, checked: !item.checked } : item
          )
          set({ items: newItems })
        },
        onDeleteItem: (id: string) => {
          const fiteredItems = get().items.filter((item) => item.id !== id)
          set({ items: fiteredItems })
        },
        onClearCompleteItems: () => {
          const incompletedItems = get().items.filter(({ checked }) => checked !== true)
          set({ items: incompletedItems })
        }
      }),
      {
        name: 'items'
      }
    )
  )
)

export const getItemsStore = () => itemsStore((state) => state)
