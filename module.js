function grammarList(list, clause = 'and', sort = true) {
  let copy = [].concat(list)
  if (sort) {
    copy.sort((a, b) => {
      return a.localeCompare(b, 'en', {
        'sensitivity': 'base'
      });
    });
  }
  if (copy.length > 1) {
    var end = copy[copy.length - 1]
    return copy.slice(0, -1).join(', ') + `, ${clause} ` + end
  } else if (copy.length === 1) {
    return copy[0];
  }
  return ''
}

module.exports = grammarList
