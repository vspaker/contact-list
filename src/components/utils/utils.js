const sortData = (arr, criteria, direction) => {
  const dataToSort = arr.slice();

  dataToSort.sort((a, b) => {
    if (a[criteria] < b[criteria]) {
      return direction === true ? 1 : -1;
    }
    if (a[criteria] > b[criteria]) {
      return direction === true ? -1 : 1;
    }
    return 0;
  });
  return dataToSort;
};

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export { sortData, range };
