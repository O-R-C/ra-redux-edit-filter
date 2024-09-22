import PropTypes from 'prop-types'

export default function InputWithLabel({ type = 'text', placeholder, name, required, title, defaultValue }) {
  return (
    <label className='flex flex-col gap-2 text-xl'>
      {title}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className='p-2 rounded-sm text-black placeholder:text-black placeholder:opacity-80 focus-visible:outline-black'
      />
    </label>
  )
}

InputWithLabel.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
  defaultValue: PropTypes.any,
}
