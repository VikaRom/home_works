// //hw1.1
// let number = 10,
// string = 'Vika',
// //null = null,
// bool = true,
// und ;
// let user = {
//     name: 'Vika',
//     age: 18
// }
// let arr = [1,2,3,4,5,6,7,8];

// //hw1.2

// let user_Vasya = {
//     name:'Vasya',
//     age:25,
//     man:true,
//     childrens_name: {
//         ch1:'petya',
//         ch2:'oleg'
//     },
//     childrens_age: [12,19],
//     getall: function () {
//         const template = `
//         name: ${user_Vasya.name}
//         age: ${user_Vasya.age}
//         man: ${user_Vasya.man}
//         children_name: ${user_Vasya.childrens_name.ch1}
//         children_age: ${user_Vasya.childrens_age}

//         `
//         console.log(template)
//         return;
//     }
    
// }
// user_Vasya.getall()

//hw1.3
//  let getuser = function() {
//    console.log(user_Vasya);
//    return;

// }
// getuser();

//hw1.5
const usersArr = [
    {
        name:'Vika',
        sername:'Romantsova',
        birhsday:'2001',
        favorite: ['пицца', 'паста']
    },
    {
        name:'Oleg',
        sername:'firsov',
        birhsday:'1987',
        favorite: ['стейк', 'паста']
    },
    {
        name:'Vasya',
        sername:'Olegovich',
        birhsday:'1990',
        favorite: ['пицца', 'пирог']
    },
    {
        name:'Petya',
        sername:'Romanov',
        birhsday:'1998',
        favorite: ['пирог', 'стейк', 'салат']
    }
]
// const getUser = function (index){
    
//     console.log(usersArr[index]);
// }
// const getUser = function(name){
//     for(let i = 0; i < usersArr.length; i++){
//         const user = usersArr[i];
//         if(name == user.name){
//             console.log(user);
//             break;
//         }
//         continue;
//     }
// }


// const getUsers = function(age){
//     let newArr = [];
//     for(let i = 0; i< usersArr.length; i++){
//         const user = usersArr[i];
//         if(age <= user.age ){
//              newArr.push(user);
//         }
//     }
//     console.log(newArr);
// }
// getUsers(25)
// const getUsers = function(age){
//     let newArr = [];
//     for(let i = 0; i< usersArr.length; i++){
//         const user = usersArr[i];
//         newAge = 2020 - user.birhsday;
//         if(newAge <= age){
//             newArr.push(user);
//         }
//     }
//     console.log(newArr);
// }

const getUsers = function(dish){
    let newArr = [];
    for(let i = 0; i< usersArr.length; i++){
        const user = usersArr[i];
        for(let j = 0; j< user.favorite.length; j++){
            if(dish == user.favorite[j]){
                newArr.push(user)
                break;
            }
        }
    }
console.log(newArr);
}
