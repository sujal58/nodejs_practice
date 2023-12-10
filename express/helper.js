function increment(value) {
  return value + 1;
}

function increase(price, increase) {
  return ((price - increase) / price) * 100;
}

module.exports = { increment, increase };
