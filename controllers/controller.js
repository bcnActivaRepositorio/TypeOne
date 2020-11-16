//global
var myCar = Car;
var myWheel = Wheel;
var showText;
var checkMe = true;
//you trigger everything
document.getElementById('create').addEventListener('click', createCar);
document.getElementById('cleanField').addEventListener('click', clearFields);
function createCar() {
    //data
    var plate = document.getElementById('plateCar').value;
    var brand = document.getElementById('inputBrand').value;
    var color = document.getElementById('colorCar').value;
    //check my plate
    var truePlate;
    truePlate = plateValidate(plate);
    //creation of object car
    myCar = new Car(plate, color, brand);
    console.log(myCar);
    // data wheels
    var diameter = document.getElementById('inputWheel').value;
    var brandWheel = document.getElementById('brandWheels').value;
    // new Object
    myWheel = new Wheel(diameter, brandWheel);
    //you'll tell me the true
    checkMe;
    //check later
    //car.addWheel(new Wheel(diameter,brandWheel));
    showText = "CAR: PLATE: " + myCar.plate
        + " COLOR: " + myCar.color + " BRAND: " + myCar.brand
        + " WHEELS: " + myWheel.toString();
    // JSON.stringify(car.wheels)
    console.log(myWheel.toString());
    //remove display none
    var cardShow = document.getElementById('showCar');
    (checkMe) ? cardShow.classList.remove('d-none') : cardShow.classList.add('d-none');
    document.getElementById('answerMe').innerText = showText;
}
// clear fields
function clearFields() {
    console.log('I work clean');
    (document.getElementById('plateCar')).innerHTML = "";
    // documentacion
    // https://www.iditect.com/how-to/53742045.html
}
//check my plate
function plateValidate(plate) {
    var plate_regex = /^([0-9]{4,4}[a-z]{3,3})$/i;
    if (!plate_regex.test(plate)) {
        alert("La matricula debe contener 4 numeros y 3 letras");
        return false;
    }
    else {
        return true;
    }
}
