const formatDateShort = (date) => {
  const options = {
    month: 'short',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString("EN-GB", options)
  return now
}

export default formatDateShort
