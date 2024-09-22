import PropTypes from 'prop-types'
import BtnLink from '../../ui/BtnLink'

export default function TaskItem({ title, price, id }) {
  return (
    <li className='flex justify-between items-center text-lg bg-slate-800 p-2 rounded-md  '>
      <h3 className='w-1/3'>{title}</h3>
      <p>{price}</p>
      <div className='flex gap-4'>
        <BtnLink to={`/task/${id}/edit`}>Edit</BtnLink>
        <BtnLink
          to={`/task/${id}/delete`}
          type='delete'
        >
          Delete
        </BtnLink>
      </div>
    </li>
  )
}

TaskItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}
