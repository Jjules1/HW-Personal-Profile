//Homework Part One

//Using what you did with Objects perdiod 2 from the slides, create a personal profile. Instead of Products you will need to create a personal profile. Initialize Constructors and More!
//Step 1
//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.

let art = {
    name: 'jos',
    freeTime: 2,
    pen: true

}
//Step 2
//Use dot notation to return hobby description
console.log(art);

//Step 3
//Use bracket notation to return name
console.log(art['name']);


//Step 4
//Arrays: Create an array with 4 different hobbies
const hobbies = ['sleeping','cooking','hicking','camping'];
console.log(hobbies);

//Step 5
//access second item in the array
hobbies[1];
console.log(hobbies[1]);

//Step 6
//Change the value of the boolean of the object we created.
art.pen= false;
console.log(art.pen);

// Step 7
//Add a new property to our person object such as supplies with multiple values in the property.
art.favSport = ['football', 'basketball', 'soccer'];
console.log(art);

// Step 8
//remove the hobby description property from the person object
delete art.pen;
console.log(art);

//Use push to add another hobby to your array of hobbies
hobbies.push('coding');
console.log(hobbies);

//use pop to remove the last item from an hobby array
hobbies.pop();
console.log(hobbies);

//use unshift to add more values to the beginning of the hobby array.
hobbies.unshift('drawing', 'relaxing', 'gaming');
console.log(hobbies);
// us shift to remove the item from the hobby of the array
hobbies.shift();
console.log(hobbies);

//Write a for in loop for the person object you created
for (let name in art ){
    console.log(art['name']);
    console.log(name);

}

//Write a for each loop for your person Object
Object.keys(art).forEach(function(key){
    console.log(key);
    console.log(art[key]);
});
//Write a for loop for your hobby array
for (let i=0; i< hobbies.length;i++){
    console.log(hobbies[i]);
}
//Write a for of loop for your hobby array
for (let i of hobbies) {
    console.log(i)
}
//write a for each loop for your hobby array
hobbies.forEach(i=>console.log(i));

//Array vs Objects

//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.

//Use dot notation to return hobby description

//Use bracket notation to return name


//Arrays: Create an array with 4 different hobbies


//access second item in the array

//Objects
//Change the value of the boolean of the object we created.

//Add a new property to our person object such as supplies with multiple values in the property.

//remove the hobby description property from the person object


//Arrays
//Use push to add another hobby to your array of hobbies


//use pop to remove the last item from an hobby array


//use unshift to add more values to the beginning of the hobby array.

// us shift to remove the item from the hobby of the array

//Object
//Write a for in loop for the person object you created

//Write a for each loop for your person Object


//Arrays
//Write a for loop for your hobby array

//Write a for of loop for your hobby array

//write a for each loop for your hobby array




