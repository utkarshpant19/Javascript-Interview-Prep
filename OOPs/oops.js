// Object Literal


let player = {
    name: 'Roger',
    age: 24,
    isActive: false,
    greet(){
        console.log(this);
    }
}

// console.log(player.greet());
// console.log(this);


//******************    Constructor Function  ********/

function User(name, isLoggedIn){

    this.name = name;
    this.isLoggedIn = isLoggedIn;

    // return this; Implicitly returns this
}


let user1 =new User('Utkarsh', true);
let user2 = new User('Roger', false)
console.log(user1);
console.log(user2.constructor); // Reference to User Function
