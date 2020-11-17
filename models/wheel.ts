class Wheel{
    public diameter:number;
    public brand:string;

    constructor(diameter:number, brand:string){
        this.diameter = diameter;
        this.brand = brand;
    }

    

    toString(){
        let text: string;
        text += `Size: ${this.diameter} Brand: ${this.brand} \n`;
        return text;
    }

}