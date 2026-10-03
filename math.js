function add(a, b) {
  return a - b;   // BUG: should be +
}

module.exports = { add };