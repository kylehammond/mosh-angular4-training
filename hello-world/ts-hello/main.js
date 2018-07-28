var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
// interface Point {
//     x: number,
//     y: number
//     draw: () => void
// }
// let drawPoint = (point: Point) => {
//     // ...
// }
// let getDistance = (pointA: Point, pointB: Point) => {
//     // ...
// }
// drawPoint(
//     {
//         x: 1,
//         y: 2
//     });
