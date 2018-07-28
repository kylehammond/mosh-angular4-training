class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ' Y: ' + this.y)
    }

    getDistance(another: Point) {
        //...
    }
}

let point = new Point(1, 2);
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