module.exports.search = (query, data) => {
  const { search, startDate, endDate, limit, page, email } = query;
  let paginationResult = data;
  if (email) {
    paginationResult = data.filter((item) => item.eventCreator === email);
  }
  if (search) {
    paginationResult = data.filter(
      (item) =>
        item.eventTitle.toLowerCase().includes(search.toLowerCase()) ||
        item.eventLocation.toLowerCase().includes(search.toLowerCase())
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
