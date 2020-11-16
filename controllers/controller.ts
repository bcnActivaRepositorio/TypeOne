//global
var myCar: any = Car;
var myWheel: any = Wheel;
var showText: any;
var checkMe: boolean = true;

 //you trigger everything
  document.getElementById('create').addEventListener('click', createCar);
  document.getElementById('cleanField').addEventListener('click', clearFields);

function createCar(){
    
     //data
 let plate: string = (document.getElementById('plateCar') as HTMLInputElement).value;
 let brand: string = (document.getElementById('inputBrand') as HTMLInputElement).value;
 let color: string = (document.getElementById('colorCar') as HTMLInputElement).value;

//check my plate
var truePlate:boolean;
truePlate = plateValidate(plate);
    //creation of object car
    myCar = new Car(plate,color,brand);
    console.log(myCar);

// data wheels
let diameter: any      = document.getElementById('inputWheel').value;
let brandWheel: string = document.getElementById('brandWheels').value;
// new Object
myWheel = new Wheel(diameter, brandWheel);
//you'll tell me the true
checkMe;
    //check later
    //car.addWheel(new Wheel(diameter,brandWheel));

    showText = "CAR: PLATE: " + myCar.plate 
    + " COLOR: " +myCar.color + " BRAND: " + myCar.brand 
    + " WHEELS: " + myWheel.toString();
    // JSON.stringify(car.wheels)
    console.log(myWheel.toString());
    //remove display none
    let cardShow = document.getElementById('showCar');
   (checkMe) ? cardShow.classList.remove('d-none') : cardShow.classList.add('d-none'); 
    document.getElementById('answerMe').innerText = showText;
}

// clear fields
function clearFields(): void {
    console.log('I work clean');
    (document.getElementById('plateCar')).innerHTML = "";
    
    // documentacion
    // https://www.iditect.com/how-to/53742045.html
}
//check my plate
function plateValidate(plate:string){
    var plate_regex =  /^([0-9]{4,4}[a-z]{3,3})$/i; 
    if (!plate_regex.test(plate)) {
        alert("La matricula debe contener 4 numeros y 3 letras");
        return false;
    }else{
        return true;
    }
}
