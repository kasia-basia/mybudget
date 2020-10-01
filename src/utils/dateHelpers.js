import dayjs from "dayjs";

export const getMonthBoundary = (date) => {
  const start = dayjs(date).startOf("month");
  const end = dayjs(date).endOf("month");

  return {
    start,
    end,
  };
};
