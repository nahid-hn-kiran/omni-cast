const FormatDate = (date) => {
  const newDate = new Date(date);
  const formatedDate = newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatedDate;
};

export default FormatDate;
