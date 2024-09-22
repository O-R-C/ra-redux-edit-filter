import PropTypes from 'prop-types'

export default function Header({ children }) {
  return <header className='px-2 flex justify-end'>{children}</header>
}

Header.propTypes = {
  children: PropTypes.node,
}
