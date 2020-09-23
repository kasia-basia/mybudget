import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const getMonthBoundary = (date) => {
  const start = dayjs(date).utc().startOf("month").unix();
  const end = dayjs(date).endOf("month").unix();

  return {
    start,
    end,
  };
};
