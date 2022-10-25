import { format } from "date-fns";

export const useDateHelper = () => {
  const formatDate = (date: Date | number, pattern = "MM/dd/yy") => {
    return format(date, pattern);
  };
  return { formatDate };
};
