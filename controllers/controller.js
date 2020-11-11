//global
var myCar;
var myWheel;
var showText;
//you trigger everything
document.getElementById('create').addEventListener('click', createCar);
document.getElementById('cleanField').addEventListener('click', clearFields);
function createCar() {
    //data
    var plate = document.getElementById('plateCar').value;
    var brand = document.getElementById('inputBrand').value;
    var color = document.getElementById('colorCar').value;
    //creation of object car
    myCar = new Car(plate, color, brand);
    // data wheels
    var diameter = document.getElementById('inputWheel').value;
    var brandWheel = document.getElementById('brandWheels').value;
    myWheel = new Wheel(diameter, brandWheel);
    //check later
    //car.addWheel(new Wheel(diameter,brandWheel));
    showText = "CAR: PLATE: " + myCar.plate
        + " COLOR: " + myCar.color + " BRAND: " + myCar.brand
        + " WHEELS: " + myWheel.toString();
    // JSON.stringify(car.wheels)
    document.getElementById('answerMe').innerText = showText;
}
// clear fields
function clearFields() {
    console.log('I work clean');
}
