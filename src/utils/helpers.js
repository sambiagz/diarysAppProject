export const convertSeconds = value => {
  const seconds = value % 60;
  const mins = (value - seconds) / 60;
  return addZeros(mins) + ':' + addZeros(seconds);
};

const addZeros = value => {
  if (value < 9) {
    return '0' + value;
  }
  return value;
};

export const showError = errorCode => {
  alert(errorCode);
};
