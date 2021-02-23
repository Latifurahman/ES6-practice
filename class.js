// class Student{
//     constructor(sName, sDept, sHall, sHome){
//         this.Name = sName;
//         this.Dept = sDept;
//         this.Batch = 45;
//         this.Hall = sHall;
//         this.HomeDistrict = sHome;
//         this.university = "Jahangirnagar University";

//     }
// }

// const student1 = new Student("Jannat Shumi", "Environmental Sciences", "Fazilatunnesa Hall", "Dhaka");
// const student2 = new Student("Latifur Rahman", "Statistics", "Shaheed Rafiq Jabbar hall", "Satkhira");

// console.log(student1, student2);


class Mobile {
    constructor( mModel, mDisplaySize, mWeight, mPrice){
        this.Model = mModel;
        this.Brand = "Xiaomi";
        this.Display = mDisplaySize;
        this.Weight = mWeight;
        this.Price = mPrice;
    }
}

const mobile1 = new Mobile("Mi A1", "5.5'", "168g", 21000 );
const mobile2 = new Mobile("Mi Note 5 pro", "5.7'", "175g", 20000);

console.log(mobile1, mobile2);