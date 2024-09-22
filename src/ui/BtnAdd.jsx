import BtnLink from './BtnLink'

export default function BtnAdd() {
  return (
    <BtnLink to='/task/new'>
      <span className='text-2xl'>&#43;</span>
    </BtnLink>
  )
}
