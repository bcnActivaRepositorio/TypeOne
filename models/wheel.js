var Wheel = /** @class */ (function () {
    function Wheel(diameter, brand) {
        this.diameter = diameter;
        this.brand = brand;
    }
    Wheel.prototype.toString = function () {
        var text;
        text += "Size: " + this.diameter + " Brand: " + this.brand + " \n";
        return text;
    };
    return Wheel;
}());
