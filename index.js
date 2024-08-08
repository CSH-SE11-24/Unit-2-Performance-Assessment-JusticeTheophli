const prompt = require('prompt-sync')()
console.log("Welcome to my storyline. Our goal today is to get to our destination; Accra Ghana")
console.log("First we need to confirm your passport details")

let user = {
  legalName: prompt("What is your legal name"),
  letAge: prompt("How old are you?")

}

let airlines = ["Delta", "Spirit", "Air Morocco"]

console.log(airlines);

let airline = prompt("There are three airlines that go to Ghana which do you want to choose?")
if(airline === "no"){
  console.log("What airline do you want to choose then?")
 airline = prompt("What airline do you want to choose then?");
}else{
let user1 = prompt("Are you sure you want to pick this airline")
}
console.log(user.legalName +", welcome to your airline" +airline)
console.log(" Since you are sure you want to pick this airline; We need to make a packing list for your trip it will be 7 days and 7 nights. Make a list of what you want to bring")


function makePackingList() {
let packingList = [];
let newItem = prompt("what do you want to bring?");
packingList.push(newItem);

let additionalItem = prompt("do you want to add anything else to your packing list");

while (additionalItem === "yes") {
  newItem = prompt("What else do you want to bring")
  packingList.push(newItem);
  additionalItem = prompt("Do you want to add anything else to your packing list? Enter 'yes'or 'no'")
}
console.log(" So far you have packed" +packingList)

  let confirmation = prompt("Are you sure this is all you want to bring?")
  while (confirmation === "no") {
    newItem = prompt("What else do you want to bring")
    packingList.push(newItem);
    confirmation = prompt("Is this all you want to bring? Enter 'yes'or 'no'")
  }
return packingList;
}

 let packinglist = makePackingList();
console.log("This is what you have on your packing list:" +packinglist)
// the user will fast foward to them going to the airport

console.log("Now that we have made your packing list and have everything set up we will be heading to the airport in a few hours to catch your flight.")


console.log("You have made it to the airport and checked in your bags now time to go to your gate")


console.log("The flight will be 3 hours long")


console.log ("You have boarded the airplane and the flight has taken off")

console.log('hour 1 on the plane')
foodLIst();
for (let i = 1; i <= 3; i - 1) {


}
function foodLIst() {
let foods = ["fried rice with chicken", "oxtail with rice and peas", "beans with plantain"];
for (let i = 0; i < foods.length; i++) {
  let choice = prompt(`Do you want to eat ${foods[i]}? Enter 'yes' or 'no'`);
  if (choice === 'yes') {
    console.log(`You have chosen ${foods[i]}. Enjoy your meal!`);
    break;
  }

}

 //the user decides weather they want to sleep to fast foward the hours on the plane or wake up 
console.log ('hour 2 on the plane')

let sleepChoice = prompt("do you want to sleep. Enter 'yes' or 'no'")
console.log (sleepChoice);
if (sleepChoice === 'yes'){
  console.log("You choose to sleep");
}else{
  if (sleepChoice === 'no')
console.log("You choose not to sleep"); 
}

// The user is about to land an realize they ended up at the wrong destination
   console.log('hour 3 on the plane. You have now landed but you loook outside your airplane with and realize you arent at the right destination. The pilots and flight attentents tell you are in Morraco and you need to head to get off the plane and find your way back to your real destination');

    let options = ["stay in Morocco", "find another flight to Ghana at Morocco", "take a flight back to New York"];
  for (let i = 0; i < options.length; i++) {
    let choice = prompt(`Option ${i + 1}: ${options[i]}. Enter 'yes' or 'no' to make your choice`);
    if (choice === 'yes') {
      console.log(`You have chosen: ${options[i]}`);
      break;
    }
  }

  // print out the story end
console.log("Thank you for participating in the storyline. The story has come to an end.");
}
