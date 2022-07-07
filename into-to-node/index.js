const superheroes=require("superheroes");
const supervillains = require('supervillains');

var mysupervillainname=supervillains.random();
var mysuperheroname=superheroes.random();
console.log(mysuperheroname+" will fight with "+mysupervillainname);