export const getFullDate = (date: Date) => {
  const day = date.getDate();
  const month =
    (date.getMonth() + 1).toString().length === 1
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
