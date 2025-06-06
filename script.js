function mincost(arr) {
  let totalCost = 0;

  while (arr.length > 1) {
    // Sort array to get the two smallest ropes at the front
    arr.sort((a, b) => a - b);

    // Take the two smallest ropes
    const first = arr.shift();
    const second = arr.shift();

    const cost = first + second;
    totalCost += cost;
    arr.push(cost);
  }

  return totalCost;
}

module.exports = mincost;
