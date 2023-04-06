module.exports.search = (query, data) => {
  const { title, location, startDate, endDate, limit, page, email } = query;
  let paginationResult = data;
  if (email) {
    paginationResult = data.filter((item) => item.eventCreator === email);
  }
  if (title) {
    paginationResult = data.filter((item) =>
      item.eventTitle.toLowerCase().includes(title.toLowerCase())
    );
  }
  if (location) {
    paginationResult = data.filter((item) =>
      item.eventLocation.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (page || limit) {
    paginationResult = data.slice(
      ((page ? page : 1) - 1) * (limit ? limit : 10),
      (page ? page : 1) * (limit ? limit : 10)
    );
  }

  return paginationResult;
};
