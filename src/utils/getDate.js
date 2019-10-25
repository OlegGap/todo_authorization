export default () => {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}-${
    currentDate.getMonth() < 10
      ? `0${currentDate.getMonth().toString()}`
      : currentDate.getMonth()
  }-${currentDate.getDate()}`;
};
