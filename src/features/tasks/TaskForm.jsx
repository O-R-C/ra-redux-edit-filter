export default function TaskForm() {
  return (
    <form>
      <input
        type='text'
        name='title'
      />
      <input
        type='number'
        name='price'
      />
      <button>Save</button>
    </form>
  )
}
