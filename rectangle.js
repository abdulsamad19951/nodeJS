module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeout(() => callback(new Error("Rectangle dimensions should be greater than zero:  x = "
      + x + ",  and y = " + y),
      null),
      2000)
  }
  else {
    setTimeout(() => callback(null,
      {
        perimeter: () => (2 * (x + y)),
        area: () => (x * y)
      }
    ),
      2000)
    // callback(null, {})
    // console.log("The area of the rectangle is " + rect.area(l, b));
    // console.log("The perimeter of the rectangle is " + rect.perimeter(l, b));
  }
}

// exports.perimeter = (x, y) => (2 * (x + y));
// exports.area = (x, y) => (x * y);