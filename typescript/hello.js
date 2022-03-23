var Direction;
(function (Direction) {
    Direction[Direction["Up"] = -1] = "Up";
    Direction[Direction["Down"] = 0] = "Down";
    Direction[Direction["Left"] = 9] = "Left";
    Direction[Direction["Right"] = 10] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[0]);
var noop = function () { return null; };
