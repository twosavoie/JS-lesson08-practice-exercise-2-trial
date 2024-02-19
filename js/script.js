var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

// Create function that will remove an element from an array
var removeItem = function (array, item) {
  var index = array.indexOf(item);

  // if (index === -1) {
  //   console.log(
  //     `Sorry, no such item in this array.`
  //   );
  // } else {
  //   array.splice(index, 1);
  //   console.log(`Removing ${item}`);
  // }

  if (index !== -1) {
    array.splice(index, 1);
    console.log(`Removing ${item}`);
  } else {
    console.log(`Sorry, no such item in this array.`)
  }
};

removeItem(stuff, "code");
console.log(stuff);
removeItem(stuff, "tea");
console.log(stuff);
