const person = {name: "Johny", phone: 01722457845, address: "Jahangirnagar University", gfName: "Tamanna", friends: ["Labu", "Jannat", "Rocky","Abir"]};

const gfName = person.gfName;
const phone = person.phone;
const friends = person.friends;
const address = person.address;



console.log(gfName, phone, friends);
console.log(gfName, phone, friends);
console.log(gfName, phone, address);
console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);

const {gfName} = person;
console.log(gfName);