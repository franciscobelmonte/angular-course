var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Default (ES6) and optional parameters
function hello(who, age, married) {
    if (age === void 0) { age = 30; }
    console.log(who, age, married);
}
hello("Fran");
hello("Fran", 35);
hello("Fran", 35, true);
//Arrow functions (ES6)
var normal = function () {
    console.log("Normal function");
};
var arrow = function () { return console.log("Arrow function"); };
normal();
arrow();
var normalWithParameters = function (a, b) {
    console.log(a + b);
};
var arrowWithParameters = function (a, b) { return console.log(a + b); };
normalWithParameters(3, 2);
arrowWithParameters(5, 5);
//Destructuring
var captainAmerica = {
    nickname: "Steve Rogers",
    affiliate: "Avengers",
    superpower: "Strenght"
};
var nickname = captainAmerica.nickname, affiliate = captainAmerica.affiliate, superpower = captainAmerica.superpower;
console.log(nickname, affiliate, superpower);
var avengers = ["Thor", "Captain America", "Iron Man"];
var thor = avengers[0], ironMan = avengers[2];
console.log(thor, ironMan);
//Promises
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        resolve();
    }, 1000);
});
console.log("Step one");
promise.then(function () {
    console.log("Después de ejecutar la promesa");
});
console.log("Step two");
function sendToMission(xmen) {
    console.log(xmen.name + " sended to a mission");
}
var cyclops = {
    name: "Scott Summers",
    power: "Generate concussive force-based, red-colored beams from his eyes"
};
var wolvie = {
    name: "Logan",
    power: "Regeneration"
};
sendToMission(cyclops);
sendToMission(wolvie);
//Classes and decorators (Typescript)
function decorator(functionToDecorate) {
    console.log(functionToDecorate);
}
var Avenger = /** @class */ (function () {
    function Avenger(heroname, realname, age) {
        this.hasPower = false;
        this.canFly = false;
        this.heroname = heroname;
        this.realname = realname;
        this.age = age;
    }
    Avenger = __decorate([
        decorator
    ], Avenger);
    return Avenger;
}());
var antman = new Avenger("Antman", "Scott Lang", 42);
console.log(antman);
