
function removeNone (row, column) {
  let data = row[column.property]
  data = data.replace('None', '')
  return data
}

function sliceDate (row, column) {
  let data = row[column.property]
  return data.slice(0, 19)
}

function removeInputNone (row, column) {
  let data = row[column.property]
  data = data.replace('None', '')
  return data
}

export default {
  removeNone,
  sliceDate
}

