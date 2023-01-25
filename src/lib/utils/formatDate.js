const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: '2-digit',
    minute:'2-digit'
  };
  const now = new Date(date).toLocaleDateString("EN-GB", options);

  return now;
};

export default formatDate;
