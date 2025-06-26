export const getFullFormattedDate = (date: Date) => {
  return {
    day: date.getDate().toString(),
    weekday: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date),
    month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
  };
};
