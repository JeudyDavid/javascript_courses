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
console.log(enterprise.pop())
console.log(enterprise.push('kinam'))
console.log(enterprise)


