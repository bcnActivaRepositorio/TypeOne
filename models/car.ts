class Car {
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[]=new Array();
    
    constructor(plate:string,color:string,brand:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }
  //getters
get myPlate(): string {
    return this.plate;
}
get myColor(): string {
    return this.color;
}
 get myBrand(): string {
     return this.brand;
 }
 //setters
set myPlate(plate) {
    this.plate = plate;
}
set myColor(color) {
    this.color = color;
}
 set myBrand(brand) {
     this.brand = brand;
 }
    
    addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);
    }
}