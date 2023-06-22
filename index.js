/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/


// Q1
let grades = [56, 87, 99, 40]
grades.push(68);
grades.pop(3);
grades[3] = 60; 
let gradesTotal = 0
for (let i = 0; i < grades.length; i++ ) {
  gradesTotal += grades[i];
}
let average = gradesTotal / 4;

//================
console.log(grades);
console.log(gradesTotal);
console.log(average);



//          -----------------------------------------------
//Q2
let vehicles = {
    name: "Element",
    brand: "Honda",
    year: "2004",
    numberofwheels: 4,
    isEnvironmentallyFriendly: true,
};

for (properties in vehicles){
    console.log(properties);
    console.log(vehicles[properties])
};
