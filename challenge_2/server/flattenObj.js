const createColumns = (json) => {
  let keys = Object.keys(json);
  let columns = keys[0];
  for (let i = 1; i < keys.length; i++) {
    if(keys[i] !== 'children') {
      columns = columns + ',' + keys[i];
    }
  }
  return columns + '\n';
}

const createRows = (json) => {
  let keys = Object.keys(json);
  let rows = json[keys[0]];
  for (let i = 1; i < keys.length; i++) {
    if(keys[i] !== 'children') {
      rows = rows + ',' + json[keys[i]];
    } else {
      for (let j = 0; j < json[keys[i]].length; j++) {
        rows = rows + '\n' + createRows(json[keys[i]][j]);
      }
    }
  }
  return rows;
}

const flatten = (json) => {
  let cols = createColumns(json);
  let rows = createRows(json);
  return cols + rows;
}

module.exports = flatten;