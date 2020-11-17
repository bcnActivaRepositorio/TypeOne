//global
var myCar: Car;
var myWheel: Wheel;
var showText: any;
var checkMe: boolean = true;

 //you trigger everything
  document.getElementById('create').addEventListener('click', createCar);
  document.getElementById('create').addEventListener('click', showDiv);
  document.getElementById('createWheels').addEventListener('click', createWheels);

function createCar(){  
     //data
 var plate: string = (document.getElementById('plateCar') as HTMLInputElement).value;
 var brand: string = (document.getElementById('inputBrand') as HTMLInputElement).value;
 var color: string = (document.getElementById('colorCar') as HTMLInputElement).value;
    // element to show/hide
let cardShow = document.getElementById('showCar') as HTMLElement;
//check my plate
checkMe = plateValidate(plate);
    //creation of object car
if (!checkMe) {
    alert('Plate must have 4 numbers and 3 CAPITAL letters');

} else {
    myCar = new Car(plate,color,brand);
    console.log(myCar);
    console.log(myCar.plate);
    console.log(myCar.color);
    console.log(myCar.brand);
    showText = "CAR: PLATE: " + myCar.plate + "\n"
    + " COLOR: " +myCar.color + "\n" + " BRAND: " + myCar.brand ;
        //remove display none
   (checkMe) ? cardShow.classList.remove('d-none') : cardShow.classList.add('d-none'); 
   document.getElementById('answerMeCar').innerText = showText;
}

 

}
//wheels
function createWheels(){
console.log('wheels works');
// data wheels
let i: number;
let errorNum: number   = 0;
let diameter: number;
let brandWheel: string;
 // iterate through all of them
 for(i = 1; i <= 4; i++){
      diameter = parseInt((document.getElementById('inputWheel' + i) as HTMLInputElement).value);
      //checkWheel
checkMe = sizeWheel(diameter);
if(!checkMe) {
    alert(`The ${i} wheel size MUST be between 17 & 21`);
    errorNum++;
} 
    brandWheel = (document.getElementById('brandWheels' + i) as HTMLInputElement).value;
}
if(errorNum == 0) {
    for(i = 1; i <= 4; i++){
        diameter   = parseInt((document.getElementById('inputWheel' + i) as HTMLInputElement).value);
        brandWheel = (document.getElementById('brandWheels' + i) as HTMLInputElement).value;
        myCar.addWheel(new Wheel(diameter, brandWheel));
        console.log(myCar);
        console.log(new Wheel(diameter, brandWheel));
        //grab me
let paragraph: any = document.getElementById('answerMeWheels') as HTMLInputElement;
//you can be shown
(checkMe) ? paragraph.classList.remove('d-none') : paragraph.classList.add('d-none');
//write it down
showText += " Rueda "+i+": \n" + 'Diametro: ' + myCar.wheels[i - 1].diameter + '\n' + 'Marca: ' +myCar.wheels[i - 1].brand;
//print it
document.getElementById('answerMeWheels').textContent = showText;
//dissapear guys
document.getElementById('create').classList.add('d-none');
document.getElementById('createWheels').classList.add('d-none');
    }
}


}  
//show the div
function showDiv(){
   (checkMe) ? document.getElementById('sizeWheelsCar').classList.remove('d-none') :
               document.getElementById('sizeWheelsCar').classList.add('d-none');
}
//check my plate
function plateValidate(plate:string){
    var plateRegex =  /^([0-9]{4,4}[A-Z]{3,3})$/; 
    (!plateRegex.test(plate)) ? checkMe = false : checkMe = true;
    // tell me the true
    return checkMe;
}
//check my size
function sizeWheel(diameter:number) {
    (diameter < 17 || diameter > 21) ? checkMe = false : checkMe = true;
    //tell me the true 
    return checkMe;
}
    // documentacion
    // https://www.iditect.com/how-to/53742045.html