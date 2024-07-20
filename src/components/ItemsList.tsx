import { type ReactNode, forwardRef } from 'react'
import clsx from 'clsx'
import { VIEWS_LIST } from '../constants'

interface ItemListProps {
  children?: ReactNode
  uncompleted?: number
  selectedView: string
  onClearItems: () => void
  onSelectView: (view: string) => void
}

export const ItemsList = forwardRef<HTMLUListElement, ItemListProps>(
  ({ children, uncompleted = 0, selectedView, onSelectView, onClearItems }, ref) => {
    return (
      <div className='relative pb-16 md:pb-0'>
        <main className='mt-4 rounded-[0.313rem] overflow-hidden bg-white [box-shadow:_0px_35px_50px_-15px_rgba(194,195,214,0.5);] dark:bg-black dark:[box-shadow:_0px_35px_50px_-15px_rgba(0,0,0,1);]'>
          <ul
            ref={ref}
            className='w-full h-[19.813rem] overflow-y-auto scrollbar-none md:h-[24.25rem]'
          >
            {children}
          </ul>
          <section className='border-t-[1px] flex justify-between items-center text-gray px-5 pt-4 pb-5 text-xs border-light-border dark:text-dark-gray dark:border-dark-border md:relative md:text-sm md:px-6'>
            <p>
              {uncompleted} {uncompleted === 1 ? 'item' : 'items'} left
            </p>

            <div className='absolute w-full font-bold left-0 bottom-0 flex justify-center rounded-[0.313rem] py-[0.938rem] gap-[1.125rem] bg-white [box-shadow:_0px_35px_50px_-15px_rgba(194,195,214,0.5);] dark:[box-shadow:_0px_35px_50px_-15px_rgba(0,0,0,1);] dark:bg-black md:shadow-none md:h-fit md:top-1/2 md:-translate-y-1/2 md:p-0 md:w-auto md:left-1/2 md:-translate-x-1/2'>
              {VIEWS_LIST.map(({ name, key }) => (
                <button
                  className={clsx(
                    key === selectedView && 'text-blue',
                    'hover:duration-200 hover:text-light-font focus-visible:duration-200 focus-visible:text-light-font dark:hover:text-dark-font dark:focus-visible:text-dark-font'
                  )}
                  key={key}
                  onClick={() => onSelectView(key)}
                >
                  {name}
                </button>
              ))}
            </div>

            <button
              onClick={onClearItems}
              className='hover:duration-200 hover:text-light-font focus-visible:text-light-font focus-visible:duration-200 dark:hover:text-dark-font dark:focus-visible:text-dark-font'
            >
              Clear Completed
            </button>
          </section>
        </main>
      </div>
    )
  }
)
