const collegeFriend = [12, 15, 13, 17, 20];
const areaFriend = [14, 23, 22];
const cousinFriend = [22, 35, 47, 11, 30];

// const allFriend = collegeFriend.concat(areaFriend).concat (5).concat(cousinFriend);

const allFriend =[...collegeFriend, ...areaFriend, 5, ...cousinFriend];

console.log(allFriend);


const business = 650;
const sochib = 450;
const minister = 500;

const takaPoisa = [650, 450, 700, 1000];
const max = Math.max(...takaPoisa);
console.log(max);

const maximum = Math.max(business, sochib, minister);
console.log(maximum);