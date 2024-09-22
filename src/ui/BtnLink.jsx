import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function BtnLink({ to, type, onClick, children }) {
  return (
    <Link
      to={to}
      replace
      className={`bg-blue-500 ${
        type === 'delete' ? 'hover:bg-red-700' : 'hover:bg-blue-700'
      }  text-white py-2 px-4 rounded`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

BtnLink.propTypes = {
  to: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}
