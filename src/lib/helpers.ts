export const getFormattedStringDate = (date: Date): String => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
