// nearest square root
function squareRoot(num) {

  // for getting nearest integer
  let nearestSquareRoot = Math.round(num**(1/2));

  // for getting rounded down to the nearest integer
  let roundedSquareRoot = parseInt(num**(1/2));
  
  return {
    nearestSquareRoot,
    roundedSquareRoot
  };

} 

console.log(squareRoot(8));

// 
// git checkout main
// git checkout main2

// git rebase main
// git add . or file1 file2
// git commit -m "message goes here"
// git rebase --continue
// git push --force origin main2

// function outer() {

//   var x = 10;

//   function inner() {

//     console.log(x)

//   }

// }

// let innerFun = outer();

// function addClickEvent(index) {
//   $('#box' + index).click(function() {
//     console.log(index);
//   });
// }

// for (var i = 0; i < 5; i++) {
//   addClickEvent(i);
// }

// console.log('a');
// setTimeout(console.log('b'), 0); 
// console.log('c');
// setTimeout(console.log('d'), 10);
// console.log('e');

// a, c, e, b, d

// {{ var }}
// [(ngModel)]



// @injectable({
//   providedIn: UserModule
// })

// [{
//   path: "dashboard", component: DashBoardCmponent,
//   path: "user": loadchildren: () => import("path goes here for user module").then(module => userModeule)
// }]

// setTimeout(() => {console.log('1')}, 0);
// Promise.resolve('hello').then(() => console.log('2'));                                                                                  
// process.nextTick(()=>{
//   console.log("4")
// })
// queueMicrotask(() => {
//   console.log("5")
// })
// process.nextTick(()=>{
//   console.log("6")
// })

// console.log('3');

var array = ["ankit", "Mohit"];
for(let i of array){
  console.log(i)
}

for(let i in array){
  console.log(i)
}



