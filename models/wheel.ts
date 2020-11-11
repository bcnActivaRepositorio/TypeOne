class Wheel{
    public diameter:number;
    public brand:string;

    constructor(diameter:number, brand:string){
        this.diameter = diameter;
        this.brand = brand;
    }
    // getters
    get myDiameter() {
        return this.diameter;
    };
    get myBrand() {
        return this.brand;
    }
    // setters
    set myDiameter(diameter) {
        this.diameter = diameter;
    }
    set myBrand(brand) {
        this.brand = brand;
    }

    toString(){
        let text: string;
        text = `Size: ${this.diameter} Brand: ${this.brand}`;
        return text;
    }

}