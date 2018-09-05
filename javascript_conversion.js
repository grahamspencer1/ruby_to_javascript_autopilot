var apples = 14;
console.log('I have ' + apples + ' apples.');

/////////////////////////////////////////////////

var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant':"The world's largest land mammal.",
  'school':'A place of learning.',
  'ice cream':'A delicious milk-based dessert.'
}
console.log(materials)
console.log(words)

/////////////////////////////////////////////////

num = 16;

if (num > 10) {
  console.log(num + ' is greater than 10.');
} else if (num === 10) {
  console.log(num + ' is exactly 10.');
} else if (num < 10) {
  console.log(num + ' is less than 10.');
}

/////////////////////////////////////////////////

i = 0;
while (i < 10) {
  console.log("Doing the same thing over and over.");
  i++;
}

/////////////////////////////////////////////////

base = 5;
i = 0;
while (i < 20) {
  console.log(base + i);
  i++;
}

/////////////////////////////////////////////////

total = 0;
i = 0;
while (i < 100) {
  total += i;
  i++;
}
console.log(total);

/////////////////////////////////////////////////

for(var height = 3; height < 15; height++) {
  if(height > 9) {
    console.log("You can ride the rollercoaster!");
  } else {
    console.log("You're too short to ride.");
  }
}

/////////////////////////////////////////////////

var containers = ['purse', 'wallet', 'backpack'];
for(var i = 0; i < containers.length; i++) {
  console.log(containers[i])
}

/////////////////////////////////////////////////

function helloWorld() {
  console.log("Hello world!");
}
helloWorld();

/////////////////////////////////////////////////

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

var amount = add(5, 7);
console.log(amount);
