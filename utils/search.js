module.exports.search = (query, data) => {
  const { search, email } = query;
  let paginationResult = data;

  if (email) {
    paginationResult = paginationResult.filter(
      (item) => item.eventCreator === email
    );
  }
  if (search) {
    paginationResult = paginationResult.filter(
      (item) =>
        item.eventTitle.toLowerCase().includes(search.toLowerCase()) ||
        item.eventLocation.toLowerCase().includes(search.toLowerCase())
    );
  }

  return paginationResult;
};
