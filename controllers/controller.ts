//global
var myCar: any = Car;
var myWheel: any = Wheel;
var showText: any;
var checkMe: boolean = true;

 //you trigger everything
  document.getElementById('create').addEventListener('click', createCar);
  document.getElementById('create').addEventListener('click', showDiv);
  document.getElementById('createWheels').addEventListener('click', createWheels);

function createCar(){
    
     //data
 let plate: string = (document.getElementById('plateCar') as HTMLInputElement).value;
 let brand: string = (document.getElementById('inputBrand') as HTMLInputElement).value;
 let color: string = (document.getElementById('colorCar') as HTMLInputElement).value;
    // element to show/hide
let cardShow = document.getElementById('showCar');

//check my plate
checkMe = plateValidate(plate);
    //creation of object car
if (!checkMe) {
    alert('Plate must have 4 numbers and 3 letters');

} else {
    myCar = new Car(plate,color,brand);
    console.log(myCar);
    console.log(myCar.plate);
    console.log(myCar.color);
    console.log(myCar.brand);
}

    showText = "CAR: PLATE: " + myCar.plate + "\n"
    + " COLOR: " +myCar.color + "\n" + " BRAND: " + myCar.brand ;
        //remove display none
   (checkMe) ? cardShow.classList.remove('d-none') : cardShow.classList.add('d-none'); 
   document.getElementById('answerMeCar').innerText = showText;

}
//wheels
function createWheels(){
console.log('wheels works');
// data wheels
let diameter: number      = parseInt((document.getElementById('inputWheel') as HTMLInputElement).value);
let brandWheel: string = (document.getElementById('brandWheels') as HTMLInputElement).value;
//checkWheel
checkMe = sizeWheel(diameter);

(!checkMe) ? alert("Wheel's size MUST be between 17 & 21") :
// new Object
myWheel = new Wheel(diameter, brandWheel);
console.log(myWheel.toString());
//grab me
let paragraph: any = document.getElementById('answerMeWheels') as HTMLInputElement;
//you can be shown
(checkMe) ? paragraph.classList.remove('d-none') : paragraph.classList.add('d-none');
//write it down
showText = myWheel.toString();
//print it
document.getElementById('answerMeWheels').textContent = showText;
}  
//show the div
function showDiv(){
   (checkMe) ? document.getElementById('sizeWheelsCar').classList.remove('d-none') :
               document.getElementById('sizeWheelsCar').classList.add('d-none');
}
//You'll tell me the whole true
var myTrue: boolean;
//check my plate
function plateValidate(plate:string){
    var plateRegex =  /^([0-9]{4,4}[a-z]{3,3})$/i; 
    (!plateRegex.test(plate)) ? myTrue = false : myTrue = true;
    // tell me the true
    return myTrue;
}
//check my size
function sizeWheel(diameter:number) {
    (diameter < 17 || diameter > 21) ? myTrue = false : myTrue = true;
    //tell me the true 
    return myTrue;
}
    // documentacion
    // https://www.iditect.com/how-to/53742045.html