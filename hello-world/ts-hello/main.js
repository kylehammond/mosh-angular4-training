var a; // int or float
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
// old js way
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// ts way
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
