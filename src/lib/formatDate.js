export function formatDate(sDate, eDate) {
  const options = { month: "long" };

  const startDate = new Date(sDate.split("T").shift());
  const endDate = new Date(eDate.split("T").shift());

  const eventYear = startDate.getFullYear();
  const eventStartMonth = new Intl.DateTimeFormat("en-US", options).format(
    startDate
  );
  const eventEndMonth = new Intl.DateTimeFormat("en-US", options).format(
    endDate
  );

  const eventStartDate = startDate.getDate();
  const eventEndDate = endDate.getDate();
  if (eventStartMonth === eventEndMonth) {
    return `${eventStartMonth} ${eventStartDate}-${eventEndDate}, ${eventYear}`;
  } else {
    return `${eventStartMonth} ${eventStartDate}-${eventEndMonth} ${eventEndDate}, ${eventYear}`;
  }
}
