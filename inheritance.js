class parent {
    constructor (fatherName){
        this.FatherName = "Sarwar";
    }
}
class Child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName (){
        return this.name + " " + this.FatherName;
    }
}

const baby = new Child ("Jannat");
const baby2 = new Child ("Parvez");

console.log(baby.getFullName());
console.log(baby2.getFullName());