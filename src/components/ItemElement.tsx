import type { FC } from 'react'
import type { Item } from '../types'
import clsx from 'clsx'

interface ItemElementProps extends Item {
  onDelete: (id: number) => void
  onCheck: (id: number) => void
}

export const ItemElement: FC<ItemElementProps> = ({ id, name, checked, onCheck, onDelete }) => {
  return (
    <li className='px-5 border-b-[1px] group flex items-center gap-3 py-4 border-light-border dark:border-dark-border md:py-5 md:gap-6 md:px-6'>
      <button
        onClick={() => onCheck(id)}
        className={clsx(
          'w-5 h-5 min-w-5 rounded-full md:min-w-6 md:w-6 md:h-6',
          checked
            ? 'bg-gradient-to-r from-[#55DDFF] to-[#C058F3] relative after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:absolute after:bg-contain after:bg-no-repeat after:bg-center after:w-3 after:h-2 after:bg-[url(/check.svg)]'
            : 'border-[1px] border-light-border relative dark:border-dark-border hover:bg-gradient-to-r hover:from-[#55DDFF] hover:to-[#C058F3] hover:border-none hover:after:bg-white hover:after:w-[calc(100%_-_2px)] hover:after:h-[calc(100%_-_2px)] hover:after:rounded-full hover:after:absolute hover:after:top-[1px] hover:after:left-[1px] hover:dark:after:bg-black focus-visible:bg-gradient-to-r focus-visible:from-[#55DDFF] focus-visible:to-[#C058F3] focus-visible:border-none focus-visible:after:bg-white focus-visible:after:w-[calc(100%_-_2px)] focus-visible:after:h-[calc(100%_-_2px)] focus-visible:after:rounded-full focus-visible:after:absolute focus-visible:after:top-[1px] focus-visible:after:left-[1px] focus-visible:dark:after:bg-black'
        )}
      />
      <p
        className={clsx(
          'grow line-clamp-1 text-xs md:text-lg md:leading-5',
          checked && 'text-[#D1D2DA] line-through dark:text-dark-gray'
        )}
      >
        {name}
      </p>
      <button
        onClick={() => onDelete(id)}
        className='min-w-3 w-3 h-3 bg-[url(/delete-light.svg)] bg-center bg-contain dark:bg-[url(/delete-dark.svg)] md:opacity-0 md:group-hover:duration-200 md:group-hover:opacity-100 md:focus-visible:duration-200 md:focus-visible:opacity-100 md:min-w-[1.125rem] md:w-[1.125rem] md:h-[1.125rem]'
      />
    </li>
  )
}
