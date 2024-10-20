"use strict";
let guestList = ["Haris", "Owais", "Tauseef", "Abdulrauf"];
let dontCome = guestList[0];
console.log(dontCome, "i think i cant come");
guestList.splice(0, 1, "Ahtisham");
guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));
