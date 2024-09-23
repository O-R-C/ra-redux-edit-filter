let timeout

export const debounceFunc = (func, wait = 300) => {
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
