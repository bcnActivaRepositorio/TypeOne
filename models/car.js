var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Object.defineProperty(Car.prototype, "myPlate", {
        //getters
        get: function () {
            return this.plate;
        },
        //setters
        set: function (plate) {
            this.plate = plate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "myColor", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "myBrand", {
        get: function () {
            return this.brand;
        },
        set: function (brand) {
            this.brand = brand;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    return Car;
}());
