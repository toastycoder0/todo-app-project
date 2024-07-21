import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { ThemeProvider } from './components/ThemeProvider'
import { Header } from './components/Header'
import { ItemsList } from './components/ItemsList'
import { ItemElement } from './components/ItemElement'
import { Footer } from './components/Footer'
import { getItemsStore } from './itemsStore'
import { VIEWS, VIEWS_LIST } from './constants'

const App = () => {
  const [view, setView] = useState(VIEWS.all.key)
  const { items, onAddItem, onCheckItem, onDeleteItem, onClearCompleteItems, onSetItems } = getItemsStore()
  const isFilteredView = view !== VIEWS.all.key

  const itemsToRender = items.filter(({ checked }) => {
    const { accept } = VIEWS_LIST.find(({ key }) => key === view) ?? VIEWS.all
    return accept.includes(checked)
  })

  return (
    <ThemeProvider>
      <div className='w-full max-w-[33.75rem]'>
        <Header onNewItem={(item) => onAddItem(item)} />
        <DragDropContext
          onDragEnd={({ source, destination }) => {
            if (!destination) return
            const newItems = [...items]
            const removeIndex = items.findIndex((_, i) => i === source.index)
            const [removed] = newItems.splice(removeIndex, 1)
            newItems.splice(destination.index, 0, removed)
            onSetItems(newItems)
          }}
        >
          <Droppable droppableId='items-list' isDropDisabled={isFilteredView}>
            {({ droppableProps, innerRef, placeholder }) => (
              <ItemsList
                {...droppableProps}
                ref={innerRef}
                uncompleted={items.filter(({ checked }) => checked === false).length}
                selectedView={view}
                onSelectView={(selectedView) => setView(selectedView)}
                onClearItems={onClearCompleteItems}
              >
                {itemsToRender.map((item, i) => (
                  <Draggable draggableId={item.id} index={i} key={item.id} isDragDisabled={isFilteredView}>
                    {({ dragHandleProps, draggableProps, innerRef }, snapshot) => (
                      <ItemElement
                        {...item}
                        {...dragHandleProps}
                        {...draggableProps}
                        {...(isFilteredView && { className: 'cursor-not-allowed' })}
                        isDragging={snapshot.isDragging}
                        ref={innerRef}
                        onDelete={onDeleteItem}
                        onCheck={onCheckItem}
                      />
                    )}
                  </Draggable>
                ))}
                {placeholder}
              </ItemsList>
            )}
          </Droppable>
        </DragDropContext>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
