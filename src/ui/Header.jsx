import PropTypes from 'prop-types'

export default function Header({ children }) {
  return <header className='px-2 flex justify-between items-center pb-5 border-b-2 border-gray-500'>{children}</header>
}

Header.propTypes = {
  children: PropTypes.node,
}
