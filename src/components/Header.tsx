import type { FC, FormEvent } from 'react'
import type { Item } from '../types'
import { THEME_VALUES } from '../constants'

interface HeaderProps {
  onNewItem: (newItem: Item) => void
}

export const Header: FC<HeaderProps> = ({ onNewItem }) => {
  const submitItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = document.querySelector('#item-name') as HTMLInputElement
    const name = input.value.trim()
    if (!name.length) return
    const newItem = { id: `${+new Date()}`, name, checked: false }
    onNewItem(newItem)
    input.value = ''
  }

  const toggleTheme = () => {
    if (localStorage.theme === THEME_VALUES.dark) {
      document.documentElement.classList.remove(THEME_VALUES.dark)
      localStorage.theme = THEME_VALUES.light
    } else {
      document.documentElement.classList.add(THEME_VALUES.dark)
      localStorage.theme = THEME_VALUES.dark
    }
  }

  return (
    <header>
      <section className='flex justify-between items-center'>
        <h1 className='font-bold h-9 uppercase text-[#FFFFFF] text-[1.688rem] tracking-[0.625rem] md:h-12 md:text-[2.5rem] md:tracking-[0.938rem]'>
          Todo
        </h1>

        <button
          onClick={toggleTheme}
          className='w-5 h-5 bg-center bg-contain bg-[url(/moon.svg)] dark:bg-[url(/sun.svg)] md:w-[1.625rem] md:h-[1.625rem]'
        />
      </section>

      <form
        className='mt-10 flex items-center gap-3 py-[0.875rem] rounded-[0.313rem] text-xs px-5 bg-white dark:bg-black md:text-lg md:mt-12'
        onSubmit={submitItem}
      >
        <span className='w-5 h-5 rounded-full border-[1px] border-light-border dark:border-dark-border md:w-6 md:h-6' />{' '}
        <input
          id='item-name'
          type='text'
          name='name'
          className='bg-white caret-blue grow placeholder:text-[#9495A5] dark:placeholder:text-[#767992] dark:bg-black'
          placeholder='Create a new todo…'
        />
      </form>
    </header>
  )
}
