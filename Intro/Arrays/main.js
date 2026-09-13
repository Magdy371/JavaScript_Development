const lunches = [];
function addLunchToEnd(arr, str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}
function addLunchToStart(arr, str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr){
  if(arr.length === 0){
    console.log("No lunches to remove.");
  }
  let item = arr.pop();
  console.log (`${item} removed from the end of the lunch menu.`);
  return arr;
}
function removeFirstLunch(arr){
  if(arr.length === 0){
    console.log("No lunches to remove.");
  }
  let item = arr.shift();
  console.log (`${item} removed from the start of the lunch menu.`);
  return arr;
}

function getRandomLunch(arr){
  if(arr.length === 0){
    console.log("No lunches available.");
    return; // Stop the function here if the array is empty
  }
  const length = arr.length;
  // Multiply Math.random() by length to get a number between 0 and length
  const randomNumber = Math.floor(Math.random() * length);
  console.log(`Randomly selected lunch: ${arr[randomNumber]}`);
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  const menuItems = arr.join(", ");
  console.log(`Menu items: ${menuItems}`);
}