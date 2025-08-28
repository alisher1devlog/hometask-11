// const user = {
//     name: "Alisher",
//     age: 30,
//     email: "ali@gmail.com"
// }

// const {name,email,age} = user;

// console.log(name);
// console.log(age);
// console.log(email);

// const point = {x:10,y:20};

// const {x:horizontal, y:vertical} = point;

// console.log(horizontal);
// console.log(vertical);

// const bornDate = new Date("2005-04-03");
// const moment = new Date();

// const diffTime = (moment - bornDate) / (1000*60*60*24);
// console.log(parseInt(diffTime));

// const person = {
//     name:"vali",
//     age:25,
//     skills: ["javascript", "react","node,js"]
// };

// const str = '{"name":"vali","age":25,"skills":["javascript","react","node,js"]}';

// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// const jsonObject = JSON.parse(str);
// console.log(jsonObject);

const user = {
    id:1,
    name: "Ali",
    address: {
        city:"Toshkent",
        street: "Amir Temur ko'chasi"
    },
};

const {
    name,
    address: {city,street},
} = user;

console.log(name);



