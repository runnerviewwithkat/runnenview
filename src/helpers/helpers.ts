export const getFormatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getIsDateWithinLast3Days = (dateString: string) => {
  const currentDate = new Date();
  const providedDate = new Date(dateString);

  // Set the time of the current date to 00:00:00 for accurate comparison
  currentDate.setHours(0, 0, 0, 0);

  // Get the date 3 days ago
  const threeDaysAgo = new Date(currentDate);
  threeDaysAgo.setDate(currentDate.getDate() - 3);

  // Check if the provided date is after 3 days ago
  return providedDate >= threeDaysAgo;
};
