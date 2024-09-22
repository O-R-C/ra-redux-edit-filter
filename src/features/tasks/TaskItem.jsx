import PropTypes from 'prop-types'

export default function TaskItem({ title, price, id }) {
  return (
    <div>
      <li>
        <h3>{title}</h3>
        <p>{price}</p>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </li>
    </div>
  )
}

TaskItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}
