module.exports.search = (query, data) => {
  const { rsvp, search, email } = query;
  let paginationResult = data;

  if (rsvp === email && rsvp) {
    let rsvp = [];
    data.forEach((element) => {
      element.eventAttendees.forEach((item) => {
        if (item.email === email) {
          console.log(email);
          rsvp.push(element);
        }
      });
    });
    paginationResult = rsvp;
  }

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
