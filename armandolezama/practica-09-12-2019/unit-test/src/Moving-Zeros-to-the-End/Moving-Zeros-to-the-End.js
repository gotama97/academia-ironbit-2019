module.exports = arr => [...arr.filter(value => value !== 0), ...arr.filter(value => value === 0)]
