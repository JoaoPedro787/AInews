function getDateDiff(fromDate, toDate = new Date()) {
  fromDate = new Date(fromDate);
  toDate = new Date(toDate);

  // --- CALCULATE DATE PART (Y, M, D) ---
  let years = toDate.getFullYear() - fromDate.getFullYear();
  let months = toDate.getMonth() - fromDate.getMonth();
  let days = toDate.getDate() - fromDate.getDate();

  // Fix negative days (borrow days from previous month)
  if (days < 0) {
    const lastMonthDays = new Date(
      toDate.getFullYear(),
      toDate.getMonth(),
      0
    ).getDate();
    days += lastMonthDays;
    months -= 1;
  }

  // Fix negative months (borrow months from previous year)
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  // --- CALCULATE HOURS ---
  const msDiff = toDate - fromDate;
  const totalHours = Math.floor(msDiff / (1000 * 60 * 60));

  // Hours remaining after removing full days
  const hours = totalHours % 24;

  return { years, months, days, hours };
}

export default getDateDiff;
