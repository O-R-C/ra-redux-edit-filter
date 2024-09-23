import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounceFunc } from '../../utility/debounceFunc'
import { getFilter, setFilter } from './filterSlice'

export default function FilterBar() {
  const filterRef = useRef()
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)

  function handleChange() {
    const debounce = debounceFunc(dispatch)
    const filter = filterRef.current.value

    debounce(setFilter(filter.trim()))
  }

  return (
    <div className='w-2/3'>
      <input
        type='text'
        name='filter'
        autoFocus
        ref={filterRef}
        defaultValue={filter}
        onChange={handleChange}
        placeholder='Search something'
        className='p-2 w-full rounded-sm text-black placeholder:text-black placeholder:opacity-80 focus-visible:outline-black'
      />
    </div>
  )
}
