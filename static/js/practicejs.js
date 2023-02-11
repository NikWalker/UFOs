// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
 // console.log(addition(4,5));
  function addition(a,b) {return a + b;}
 addition(11,6)

 //functions can call other functions
 function doubleAddition(c,d) {
    var total= addition(c,d) * 2; 
    return total;
 }
 console.log(doubleAddition(65,34))

 // Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }
  console.log(printHello)

  printHello= () => 'hello there!';

  let friends = ['Sarah','Greg','Cindy','Jeff'];

  function listLoop(userList) {
    for (var i =0; i <userList.length; i++) {
        console.log(userList[i]);
    }
  }
  listLoop(friends)

  //array of vegetables
let vegetables= ['Carrots', 'Peas', 'Lettuce', 'Tomatoes'];

for (var i = 0; i < vegetables.length; i++) {
    console.log('I Love ' + vegetables[i]);
}

for (var i= 0; i < 5; i++) {
    console.log('I am ' +i);
}

// if-statement syntax
if ( condition ) { code to execute }

// filter the data to only show date entered
if (a date is entered) {
  Filter the default data to show only the date entered
};