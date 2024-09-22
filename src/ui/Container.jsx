import PropTypes from 'prop-types'

export default function Container({ children }) {
  return (
    <div className='flex flex-col gap-6 w-1/2 bg-gray-800 p-6 mx-auto overflow-auto no-scrollbar rounded-xl'>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
}
