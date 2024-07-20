import { useState } from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import { Header } from './components/Header'
import { ItemsList } from './components/ItemsList'
import { ItemElement } from './components/ItemElement'
import { Footer } from './components/Footer'
import { getItemsStore } from './itemsStore'
import { VIEWS, VIEWS_LIST } from './constants'

const App = () => {
  const [view, setView] = useState(VIEWS.all.key)
  const { items, onAddItem, onCheckItem, onDeleteItem, onClearCompleteItems } = getItemsStore()
  const itemsToRender = items.filter(({ checked }) => {
    const { accept } = VIEWS_LIST.find(({ key }) => key === view) ?? VIEWS.all
    return accept.includes(checked)
  })

  return (
    <ThemeProvider>
      <div className='w-full max-w-[33.75rem]'>
        <Header onNewItem={(item) => onAddItem(item)} />
        <ItemsList
          uncompleted={items.filter(({ checked }) => checked === false).length}
          selectedView={view}
          onSelectView={(selectedView) => setView(selectedView)}
          onClearItems={onClearCompleteItems}
        >
          {itemsToRender.map((item) => (
            <ItemElement {...item} onDelete={onDeleteItem} onCheck={onCheckItem} />
          ))}
        </ItemsList>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
