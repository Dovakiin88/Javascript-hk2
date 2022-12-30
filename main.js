//Question 1
let cloudStrife = {
    pizza: ['Pepperoni Lovers','Deepdish', 'Mountain Pies'],
    tacos: "Anything that isn't from tacobell, fuzzys, or taco shack. Gross!",
    burgers: 'Whopper no cheese/ light mayo',
    ice_cream: ['Chocolate fudge Brownie' , 'vanilla', 'coffee almond fundge', 'Java Chip'],
    shakes: [{
        sonic: 'Chocolate',
        whataburger: 'chocolate',
        wendys: 'chocolate',
        potbelly: 'chocolate',
        dairy_queen: 'chocolate'
    }]
}

function displayyumminess(){
    for( let i=0; i < Object.keys(cloudStrife).length; i++) {
        if (Array.isArray(Object.values(cloudStrife)[i])){
            console.log(Object.values(cloudStrife)[i])
        }
    }
    console.log(cloudStrife.tacos)
}

console.log(displayyumminess())

function yumminess(){
    for(let i=0; i< cloudStrife.pizza.length; i++){
        console.log(`i like ${cloudStrife.pizza[i]}`)
    }
    console.log( `for tacos i'll eat ${cloudStrife.tacos}`)
    console.log(`my favorite burger is a ${cloudStrife.burgers}`)
    console.log('for icecream.....')
    for (let i=0; i< cloudStrife.ice_cream.length; i++){
        console.log(`i'll eat ${cloudStrife.ice_cream[i]}`)
    }
    console.log('Im not a shake person but ill have')
    for (let i = 0; i < cloudStrife.shakes.length; i++) {
        console.log(cloudStrife.shakes[i])
    }
    
}
console.log(yumminess())

//Question 2
class Angara{
    constructor(name, age, gender, planet){
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.planet = planet;
    }
    countUp= () => {
        function x(){
            let count = 0
            console.log('hit')
            console.log(function(){return count ++})
        }
    }
    printinfo (){
        return `Name : ${this.name}. \nAge: ${this.age}. \nGender: ${this.gender}\nGender: ${this.planet}`
    }
    ageUp = () => {
        return this.age ++
    }
}

let jaal = new Angara("Jaal Ama'Darav", 27, 'Male', "Havarl")
console.log(jaal.printinfo())
console.log(jaal.countUp())

let Evfra = new Angara("Evfra De Tershaav", 40, 'Male', 'Aya')
console.log(Evfra.printinfo())

//Question 3
function check(input){
    return input.length
}

console.log(check('cheese'))
function lenstr(input){
    return new Promise((resolve, reject)=> {
        if(input.length > 10){
            resolve('Big word')
        }else {
            reject('Small number')
        }
    })
}

lenstr('cheese')
.then((result) =>{
    console.log(result)
})

.catch((error) =>{
    console.log(error)
});

//codewars problem 1
// write function to return true as long as you are wmployed and not on vacation
//otherwise return false

function setAlarm(employed, vacation){
    if(employed == true && vacation==false){
        return true
    } else{ return false}
}

console.log(setAlarm(true, false))

//codewars problem 2
//basic greeting code
function greet(name){
    return `Hello ${name}`
}

console.log(greet('Cheezy'))