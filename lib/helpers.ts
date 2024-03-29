export const groupBy = (collection, property) => {
  var i = 0,
    val,
    index,
    values = [],
    result = [];
  for (; i < collection.length; i++) {
    val = collection[i][property];
    index = values.indexOf(val);
    if (index > -1) result[index].push(collection[i]);
    else {
      values.push(val);
      result.push([collection[i]]);
    }
  }
  return result;
};

export const sortBy = (collection, property) => {
  return collection.sort((a, b) => (a[property] > b[property]) ? 1 : -1)
}
