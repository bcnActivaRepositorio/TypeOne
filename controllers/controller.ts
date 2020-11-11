//global
let myCar: Car;
let myWheel: Wheel;
let showText: string;

 //you trigger everything
  document.getElementById('create').addEventListener('click', createCar);
  document.getElementById('cleanField').addEventListener('click', clearFields);

function createCar(){
    
     //data
 let plate: string = document.getElementById('plateCar').value;
 let brand: string = document.getElementById('inputBrand').value;
 let color: string = document.getElementById('colorCar').value;
    
    //creation of object car
    myCar = new Car(plate,color,brand);

// data wheels
let diameter: any   = document.getElementById('inputWheel').value;
let brandWheel: string = document.getElementById('brandWheels').value;
myWheel = new Wheel(diameter, brandWheel);
    //check later
    //car.addWheel(new Wheel(diameter,brandWheel));

    showText = "CAR: PLATE: " + myCar.plate 
    + " COLOR: " +myCar.color + " BRAND: " + myCar.brand 
    + " WHEELS: " + myWheel.toString();
    // JSON.stringify(car.wheels)

    document.getElementById('answerMe').innerText = showText;
}

// clear fields
function clearFields() {
    console.log('I work clean');
    
}
