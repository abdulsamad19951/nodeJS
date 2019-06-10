// var rect = {
// 	perimeter: (x, y) => (2*(x+y)),
// 	area: (x, y) => (x*y)
// };
var rect = require('./rectangle.js');

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("Error: ", err.message);
    }
    else {
      console.log("Area = ", rectangle.area());
      console.log("Perimeter = ", rectangle.perimeter());
    }
  })
  console.log("THis statement is after call to rect");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);