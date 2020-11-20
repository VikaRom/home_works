//hw1.1
let number = 10,
string = 'Vika',
//null = null,
bool = true,
und ;
let user = {
    name: 'Vika',
    age: 18
}
let arr = [1,2,3,4,5,6,7,8];

//hw1.2

let user_Vasya = {
    name:'Vasya',
    age:25,
    man:true,
    childrens_name: {
        ch1:'petya',
        ch2:'oleg'
    },
    childrens_age: [12,19],
    getall: function () {
        const template = `
        name: ${user_Vasya.name}
        age: ${user_Vasya.age}
        man: ${user_Vasya.man}
        children_name: ${user_Vasya.childrens_name.ch1}
        children_age: ${user_Vasya.childrens_age}

        `
        console.log(template)
        return;
    }
    
}
user_Vasya.getall()

//hw1.3
//  let getuser = function() {
//    console.log(user_Vasya);
//    return;

// }
// getuser();

