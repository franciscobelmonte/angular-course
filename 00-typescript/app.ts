//Default (ES6) and optional parameters
function hello (who:string, age:number = 30, married?:boolean) {
  console.log(who, age, married );
}

hello("Fran");
hello("Fran", 35);
hello("Fran", 35, true);

//Arrow functions (ES6)
let normal = function() {
  console.log("Normal function");
}

let arrow = () => console.log("Arrow function");

normal();
arrow();

let normalWithParameters = function(a:number, b:number) {
  console.log(a + b);
}

let arrowWithParameters = (a:number, b:number) => console.log(a + b);

normalWithParameters(3, 2);
arrowWithParameters(5, 5);

//Destructuring
let captainAmerica = {
  nickname: "Steve Rogers",
  affiliate: "Avengers",
  superpower: "Strenght"
};
let {nickname, affiliate, superpower} = captainAmerica;
console.log(nickname, affiliate, superpower);

let avengers:string[] = ["Thor", "Captain America", "Iron Man"];
let [thor, , ironMan] = avengers;
console.log(thor, ironMan);

//Promises
let promise = new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("Promesa terminada");
    resolve();
  }, 1000);
});

console.log("Step one");

promise.then(function(){
  console.log("Después de ejecutar la promesa");
});

console.log("Step two");

//Interfaces (Typescript)
interface XMen{
  name:string,
  power:string
}

function sendToMission (xmen:XMen) {
  console.log(`${xmen.name} sended to a mission`);
}

let cyclops:XMen = {
  name: "Scott Summers",
  power: "Generate concussive force-based, red-colored beams from his eyes"
};

let wolvie:XMen = {
  name: "Logan",
  power: "Regeneration"
}

sendToMission(cyclops);
sendToMission(wolvie);

//Classes and decorators (Typescript)

function decorator(functionToDecorate: Function) {
  console.log(functionToDecorate);
}

@decorator
class Avenger{
  heroname:string;
  realname:string;
  age:number;
  hasPower:boolean = false;
  canFly:boolean = false;

  constructor (
    heroname:string,
    realname:string,
    age:number
  ) {
    this.heroname = heroname;
    this.realname = realname;
    this.age = age;
  }
}

let antman:Avenger = new Avenger("Antman", "Scott Lang", 42);

console.log(antman);

