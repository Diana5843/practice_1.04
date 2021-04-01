// function Ladder (startingStairs) {
//     if(!new.target) {
//         return new Ladder();
//     }
//     this.value = startingStairs;
//     this.up = function() {
//         this.value += 1;
//     }
//     this.down = function() {
//         if (this.value !== 0) {
//             this.value -= 1;
//         }
//     }
//     this.showStep = function() {
//         return this.value;
//     }
// }

// const stair = new Ladder(4);

// console.log(stair.showStep());

// stair.up()

// console.log(stair.showStep());

// stair.down()

// console.log(stair.showStep());

function Ladder (startingStairs) {
    if(!new.target) {
        return new Ladder();
    }
    this.value = startingStairs;
}

Ladder.prototype = new LadderProto()

function LadderProto() {
    if(!new.target) {
        return new LadderProto();
    }
    this.up = function() {
        this.value += 1;
        return this;
    }
    this.down = function() {
        if (this.value !== 0) {
            this.value -= 1;
            return this;

        }
    }
    this.showStep = function() {
        return this.value;

    }
}

const stair = new Ladder();




function Student(firstname, lastname, age, isMale){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.isMale = isMale;
}

Student.prototype = new StudentPrototype;

function StudentPrototype(){
    this.sayHello = function(){
        return `${this.firstname} ${this.lastname} says hello!`;
    }
    this.toString = function toString(){
        return `${this.firstname} ${this.lastname} I'm ${this.age} year`;
    }

    this.say = function(message){
        return ` student ${this.firstname} says \n ${message}`
    }
}



