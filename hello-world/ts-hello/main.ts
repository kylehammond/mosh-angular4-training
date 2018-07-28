interface Point {
    x: number,
    y: number
    draw: () => void
}

let drawPoint = (point: Point) => {
    // ...
}

let getDistance = (pointA: Point, pointB: Point) => {
    // ...
}

drawPoint(
    {
        x: 1,
        y: 2
    });