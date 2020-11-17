//global
var myCar;
var myWheel;
var showText;
var checkMe = true;
//you trigger everything
document.getElementById('create').addEventListener('click', createCar);
document.getElementById('create').addEventListener('click', showDiv);
document.getElementById('createWheels').addEventListener('click', createWheels);
function createCar() {
    //data
    var plate = document.getElementById('plateCar').value;
    var brand = document.getElementById('inputBrand').value;
    var color = document.getElementById('colorCar').value;
    // element to show/hide
    var cardShow = document.getElementById('showCar');
    //check my plate
    checkMe = plateValidate(plate);
    //creation of object car
    if (!checkMe) {
        alert('Plate must have 4 numbers and 3 CAPITAL letters');
    }
    else {
        myCar = new Car(plate, color, brand);
        console.log(myCar);
        console.log(myCar.plate);
        console.log(myCar.color);
        console.log(myCar.brand);
        showText = "CAR: PLATE: " + myCar.plate + "\n"
            + " COLOR: " + myCar.color + "\n" + " BRAND: " + myCar.brand;
        //remove display none
        (checkMe) ? cardShow.classList.remove('d-none') : cardShow.classList.add('d-none');
        document.getElementById('answerMeCar').innerText = showText;
    }
}
//wheels
function createWheels() {
    console.log('wheels works');
    // data wheels
    var i;
    var errorNum = 0;
    var diameter;
    var brandWheel;
    // iterate through all of them
    for (i = 1; i <= 4; i++) {
        diameter = parseInt(document.getElementById('inputWheel' + i).value);
        //checkWheel
        checkMe = sizeWheel(diameter);
        if (!checkMe) {
            alert("The " + i + " wheel size MUST be between 17 & 21");
            errorNum++;
        }
    }
    if (errorNum == 0) {
        for (i = 1; i <= 4; i++) {
            diameter = parseInt(document.getElementById('inputWheel' + i).value);
            brandWheel = document.getElementById('brandWheels' + i).value;
            myCar.addWheel(new Wheel(diameter, brandWheel));
            console.log(myCar);
            console.log(new Wheel(diameter, brandWheel));
            //grab me
            var paragraph = document.getElementById('answerMeWheels' + i);
            //you can be shown
            (checkMe) ? paragraph.classList.remove('d-none') : paragraph.classList.add('d-none');
            //write it down
            showText = " Rueda " + i + ": " + 'Diametro: ' + myCar.wheels[i - 1].diameter + ' ' + 'Marca: ' + myCar.wheels[i - 1].brand;
            //print it
            paragraph.textContent = showText;
        }
    }
}
//show the div
function showDiv() {
    (checkMe) ? document.getElementById('sizeWheelsCar').classList.remove('d-none') :
        document.getElementById('sizeWheelsCar').classList.add('d-none');
}
//check my plate
function plateValidate(plate) {
    var plateRegex = /^([0-9]{4,4}[A-Z]{3,3})$/;
    (!plateRegex.test(plate)) ? checkMe = false : checkMe = true;
    // tell me the true
    return checkMe;
}
//check my size
function sizeWheel(diameter) {
    (diameter < 17 || diameter > 21) ? checkMe = false : checkMe = true;
    //tell me the true 
    return checkMe;
}
// documentacion
// https://www.iditect.com/how-to/53742045.html
