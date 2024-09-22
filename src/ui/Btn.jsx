import PropTypes from 'prop-types'

export default function Btn({ to, type, onClick, children }) {
  return (
    <button
      to={to}
      className={`bg-blue-500 ${
        type === 'delete' ? 'hover:bg-red-700' : 'hover:bg-blue-700'
      }  text-white py-2 px-4 rounded`}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}

Btn.propTypes = {
  to: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}
