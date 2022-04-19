// variables
var a = 10
console.log(a)


// functions

function fun(){
   alert("hello world") 
}

function nam(){
   var nom = prompt("what is your name")
   var final = "hello "+nom
   return final
}

while (a > 5){
    console.log("while loops")
    a--
}

// Data types
var a = 10 //number
var b = "jeudy" //String
var c = {nom: 'david',prenom: 'jean robert'} //object
var d = false; //boolean
var e = ['max','belimaire','jacques'] //array
var f; //undefined
var nothing = null; //value null


//String in javascript curent methods
var fruits = " figue\nmango " //new line
var riz = "chela,peyi,miami,boul" 
console.log(fruits.length) //number letter fruits
console.log(fruits.indexOf('g')) //return the position of the current letter
console.log(fruits.slice(2,4)) //select a parts of a string
fruits = fruits.replace("figue","cerise") //replace character in a string
fruits.toUpperCase()
fruits.toLowerCase()
console.log(fruits.charAt(1)) //return the first letter of a string
console.log(fruits[1]) //return the first letter of a string
console.log(fruits.split('')) //create an array with the string
console.log(riz.split(',')) //create an array with the string by take care of ,

//array
//two ways to create an array
let enterprise = new Array('Brana','Natcom','Digicel','marriot')
let enterprise1 = ['Brana','Natcom','Digicel','marriot']

enterprise[0] //access element in an array
// for(i = 0;i<enterprise.length;i++){
//    console.log(enterprise[i])
// }

// array common methods
enterprise.toString()
enterprise.join('+') //Brana+Natcom+Digicel+marriot
console.log(enterprise.pop()) //remove the last element
console.log(enterprise.push('kinam')) //append at the end
enterprise[enterprise.length] = "kinam 2" //same as push
enterprise.shift() //remove the first element to an array
enterprise.unshift() //add at the first an item to an array
allEnterprise = enterprise.concat(enterprise1) //concat two array
allEnterprise.slice(1,4)
allEnterprise.reverse()

var number = [2,5,1,3,10,200,45,56]
number.sort()


// Objects in javascript
// dictionnaires in python

var nom = {nom: 'david',
          prenom: "Jeudy",
          info: function(){
             return this.nom + " " + this.prenom
          }
         }
// console.log(nom.info())

//conditionnal, control flows (if else)
// if((age<18) && (age>30)){
//    console.log("great")
// }

switch(6){
    case 0:
       day = "weekday"
       break;
    case 2:
       day = "weekday"
       break;
    default:
       day = "weekend"

}

var eleve = `[
   {
      "nom": "David",
      "prenom": "Jeudy",
      "age": 18
   },
   {
      "nom": "Alain",
      "prenom": "Web",
      "age": 67
   }
]`
// console.log(JSON.parse(eleve))
var student = [
   {
      "nom": "David",
      "prenom": "Jeudy",
      "age": 18
   },
   {
      "nom": "Alain",
      "prenom": "Web",
      "age": 67
   }
]

// console.log(JSON.stringify(student))

var etudiant = [{
   "nom": "max",
   "prenom": "james",
   "Age": 34,
   "classe": "philo"
},{
   "nom": "melmix",
   "prenom": "jovens",
   "Age": 45,
   "classe": "retho" 
}]

console.log(etudiant[0].nom)