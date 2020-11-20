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
        age:18,
        sername:'Romantsova',
        birhsday:'30.11.2001'
    },
    {
        name:'Oleg',
        age:38,
        sername:'firsov',
        birhsday:'30.11.1987'
    },
    {
        name:'Vasya',
        age:30,
        sername:'Olegovich',
        birhsday:'30.1.1990'
    },
    {
        name:'Petya',
        age:22,
        sername:'Romanov',
        birhsday:'30.11.1998'
    }
]
// const getUser = function (index){
    
//     console.log(usersArr[index]);
// }
const getUser = function(name){
    for(let i = 0; i < usersArr.length; i++){
        const user = usersArr[i];
        if(name == user.name){
            console.log(user);
            break;
        }
        continue;
    }
   //console.log(user)
}