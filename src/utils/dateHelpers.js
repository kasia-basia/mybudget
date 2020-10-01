import dayjs from "dayjs";

export const getMonthBoundary = (date) => {
  const formattedDate = `${date}-01`; // in url the day of month is omitted
  const start = dayjs(formattedDate).startOf("month");
  const end = dayjs(formattedDate).endOf("month");

  return {
    start,
    end,
  };
};

export const getMonthUrl = (date = "") => {
  const current = dayjs(date).format("YYYY-MM");
  return `/${current}/`;
};
