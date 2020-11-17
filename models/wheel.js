var Wheel = /** @class */ (function () {
    function Wheel(diameter, brand) {
        this.diameter = diameter;
        this.brand = brand;
    }
    Object.defineProperty(Wheel.prototype, "myDiameter", {
        // getters
        get: function () {
            return this.diameter;
        },
        // setters
        set: function (diameter) {
            this.diameter = diameter;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Wheel.prototype, "myBrand", {
        get: function () {
            return this.brand;
        },
        set: function (brand) {
            this.brand = brand;
        },
        enumerable: false,
        configurable: true
    });
    Wheel.prototype.toString = function () {
        var text;
        text += "Size: " + this.diameter + " Brand: " + this.brand + " \n";
        return text;
    };
    return Wheel;
}());
