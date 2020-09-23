import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const getMonthBoundary = (date) => {
  const start = dayjs(date).startOf("month");
  const end = dayjs(date).endOf("month");

  return {
    start,
    end,
  };
};
