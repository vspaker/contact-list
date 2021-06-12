const sortData = (arr, criteria, direction) => {
  const dataToSort = arr.slice();

  dataToSort.sort((a, b) => {
    if (a[criteria] < b[criteria]) {
      return direction === true ? -1 : 1;
    }
    if (a[criteria] > b[criteria]) {
      return direction === true ? 1 : -1;
    }
    return 0;
  });
  return dataToSort;
};

export { sortData };
