// // variables
// var a = 10
// console.log(a)


// // functions

// function fun(){
//    alert("hello world") 
// }

// function nam(){
//    var nom = prompt("what is your name")
//    var final = "hello "+nom
//    return final
// }

// while (a > 5){
//     console.log("while loops")
//     a--
// }

// // Data types
// var a = 10 //number
// var b = "jeudy" //String
// var c = {nom: 'david',prenom: 'jean robert'} //object
// var d = false; //boolean
// var e = ['max','belimaire','jacques'] //array
// var f; //undefined
// var nothing = null; //value null


// //String in javascript curent methods
// var fruits = " figue\nmango " //new line
// var riz = "chela,peyi,miami,boul" 
// console.log(fruits.length) //number letter fruits
// console.log(fruits.indexOf('g')) //return the position of the current letter
// console.log(fruits.slice(2,4)) //select a parts of a string
// fruits = fruits.replace("figue","cerise") //replace character in a string
// fruits.toUpperCase()
// fruits.toLowerCase()
// console.log(fruits.charAt(1)) //return the first letter of a string
// console.log(fruits[1]) //return the first letter of a string
// console.log(fruits.split('')) //create an array with the string
// console.log(riz.split(',')) //create an array with the string by take care of ,

// //array
// //two ways to create an array
// let enterprise = new Array('Brana','Natcom','Digicel','marriot')
// let enterprise1 = ['Brana','Natcom','Digicel','marriot']

// enterprise[0] //access element in an array
// // for(i = 0;i<enterprise.length;i++){
// //    console.log(enterprise[i])
// // }

// // array common methods
// enterprise.toString()
// enterprise.join('+') //Brana+Natcom+Digicel+marriot
// console.log(enterprise.pop()) //remove the last element
// console.log(enterprise.push('kinam')) //append at the end
// enterprise[enterprise.length] = "kinam 2" //same as push
// enterprise.shift() //remove the first element to an array
// enterprise.unshift() //add at the first an item to an array
// allEnterprise = enterprise.concat(enterprise1) //concat two array
// allEnterprise.slice(1,4)
// allEnterprise.reverse()

// var number = [2,5,1,3,10,200,45,56]
// number.sort()


// // Objects in javascript
// // dictionnaires in python

// var nom = {nom: 'david',
//           prenom: "Jeudy",
//           info: function(){
//              return this.nom + " " + this.prenom
//           }
//          }
// // console.log(nom.info())

// //conditionnal, control flows (if else)
// // if((age<18) && (age>30)){
// //    console.log("great")
// // }

// switch(6){
//     case 0:
//        day = "weekday"
//        break;
//     case 2:
//        day = "weekday"
//        break;
//     default:
//        day = "weekend"

// }

// var eleve = `[
//    {
//       "nom": "David",
//       "prenom": "Jeudy",
//       "age": 18
//    },
//    {
//       "nom": "Alain",
//       "prenom": "Web",
//       "age": 67
//    }
// ]`
// // console.log(JSON.parse(eleve))
// var student = [
//    {
//       "nom": "David",
//       "prenom": "Jeudy",
//       "age": 18
//    },
//    {
//       "nom": "Alain",
//       "prenom": "Web",
//       "age": 67
//    }
// ]

// // console.log(JSON.stringify(student))

// var etudiant = [{
//    "nom": "max",
//    "prenom": "james",
//    "Age": 34,
//    "classe": "philo"
// },{
//    "nom": "melmix",
//    "prenom": "jovens",
//    "Age": 45,
//    "classe": "retho" 
// }]

// // console.log(etudiant[0].nom)

// // DOM Document Object Model
// // SELECTEURS

// // document.querySelector('h4').style.background = "yellow"
// // document.querySelector('#btn-1').style.visibility = 'hidden'
// // document.querySelector('#btn-1').addEventListener('click',()=>{
// //    var non = prompt("antre non w silvouple")
// //    alert("bonjour "+ non)
// // })
// // var box = document.querySelector(".click-event")
// // box.style.borderRadius = "150px";
// // box.addEventListener("click", ()=>{
// //    box.classList.toggle("question-click")
// // })

// // // Mouse move
// // const mouse = document.querySelector(".mousemove");

// // window.addEventListener("mousemove", (e)=>{
// //    mouse.style.left = e.pageX+"px"
// //    mouse.style.top = e.pageY+"px";
// // })

// // keypress
// // const ring = (key)=>{
// //    const audio = new Audio()
// //    audio.src = key+".mp3"
// //    audio.play()
// // }
// // document.addEventListener("keypress", (e)=>{
// //      ring(e.key)
// // })
// // const input = document.querySelector('input[type="text"]');

// // input.addEventListener("input", (event)=>{
// //    if(event.target.value === "rouge"){
// //        box.style.background = "red";
// //    }
// //    if(event.target.value === "vert"){
// //       box.style.background = "green";
// //   }
// //   if(event.target.value === "bleu"){
// //    box.style.background = "blue";
// // }
// // document.querySelector("h4").innerHTML = event.target.value;
// // })

// // Es6+

// var kay = ["kle","pot","pesenn"]
// // for(let k of kay){
// //    console.log(k)
// // }
// // kay.map((k)=>{
// //    console.log(k)
// // })
// var kabi = kay.map((k)=>{
//    // console.log(k);
//    return k;
// }
// )

// let salut = `${kabi}`

// // var promise = new Promise((resolve,response)=>{
// //    setTimeout(()=>{
// //       resolve({
// //          firstname: "David",
// //          lastname: "Jeudy"
// //       });
// //    }, 1000);
// // })
// // promise.then((response)=>{
// //    console.log(response)
// // })
// const vil = prompt("antre non vil la");

// var api_key = "3b2aad5d6ad59ba5b5641185dd15d9ee";

// var promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${vil}&appid=${api_key}&units=imperial`);

// promise.then((response)=>{
//    return response.json()
//     console.log(response.json())
// }).then((data)=>{
//    console.log(data.sys.country)
// }).catch((error)=>{
//    console.log("something went wrong")
// })
// // var users = fetch("https://randomuser.me/api")

// // users.then((response)=>{
// //    return response.json()
// // }).then((data)=>{
// //    console.log(data.results[0])
// // })

// // var promise = new Promise((resolve,reject)=>{
// //    var isrun = false;
// //    var result = 45/10;
      
// //       setTimeout(()=>{
// //          if(isrun){
// //             resolve()
// //          }
// //          else{
// //             reject(result)
// //          }
// //       },1000) 
      
// // })

// // promise.then((result)=>{
// //    console.log(result);
// // }).catch((result)=>{
// //    console.log(result);
// // })

// // type conversion
// var a = "12"
// a = Number(a)
// console.log(a)
// console.log(typeof a) // output: number

// var b = 12
// b = String(b)
// console.log(b)
// console.log(typeof b) // output: number

// let grades = [44
//    ,73
//    ,67
//    ,38
//    ,33]
// if(grades[0]>0 && grades[0]<60){
//    let n = grades[0]

// let new_grades = []
// let num
// let new_number
// for(i=1;i<n+1;i++){
//    if(grades[i]>-1 && grades[i]<101){
//    if(grades[i]<38){
//        new_grades.push(grades[i])
//    }else{
//        num = Math.ceil(grades[i] / 5)
//        new_number = 5 * num
//        if(new_number-grades[i] >= 3){
//            new_grades.push(grades[i])
//        }else{
//            new_grades.push(new_number)
//        }
       
//    }
//  }
// }
// console.log(new_grades)
// }
// let grades = [44
//    ,73
//    ,23
//    ,38
//    ,52]

// function gradingStudents(grades) {
//    if(grades[0]>0 && grades[0]<60){
//       let n = grades[0]

//    let new_grades = []
//    let num
//    let new_number
//    for(i=1;i<n+1;i++){
//       if(grades[i]>-1 && grades[i]<101){
//       if(grades[i]<38){
//           new_grades.push(grades[i])
//       }else{
//           num = Math.ceil(grades[i] / 5)
//           new_number = 5 * num
//           if(new_number-grades[i] >= 3){
//               new_grades.push(grades[i])
//           }else{
//               new_grades.push(new_number)
//           }

//          }
//        }
//      }
//      grades = new_grades
//      return grades
//    }


// }
// const a = gradingStudents(grades)
// console.log(a)


function sockMerchant(n, ar) {
   let i = 0
   let j = 0
   let counter = 0
   for(i=0;i<=n;i++){
      for(j=i;j<=n;j++){
       if(ar[i]===ar[j+1]){
           ar[j+1]=-100+j
           counter = counter + 1
       }
      }
   }
   console.log(counter/2) 

}

steps, path
function countingvalleys(steps, path) {
   let valleys = 0;
   let elevation = 0;
   for (let i = 0; i < steps; i++) {
   if (path[i] == 'D') {
   elevation--;
   }
   else {
   if (elevation == -1) {
   valleys++;
   }
   elevation++;
}
}
 return valleys;
}
