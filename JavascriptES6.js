// This is an file to show some the most different features implemented in ES6 (ES 2015)
// of javascript.

// Add new element in Array.
const myArray = [1,2,3,4];

// This '...' notation take the actual array, and put the value 5 inside 
// of it. The main point here, is the fact myArray is NOT being modified. 
// Because this notation creates a brand new array with the myArray content,
//  and return it with this new element inside. In this case is the number 5.
const add = (array, newValue) => {
    return [...array, newValue];
}

const newArray = add(myArray, 5);
console.log(myArray); // OUTPUT [1,2,3,4]
console.log(newArray); // OUTPUT [1,2,3,4,5]


// OBJECTS
const car = { 
    motor: '120cv',
    tires: '4',
    flex: true
}

// When you want to take the car information:
const motor = car.motor;
const tires = car.tires;
const flex = car.flex;

console.log(motor, '\n', tires, '\n', flex); //OUTPUT '120cv', 4, true


// In ES6, you can make this exact thing in a single line using destructuring:
const {motor, tires, flex} = car
console.log(motor, '\n', tires, '\n', flex); //OUTPUT '120cv', 4, true


// Declaring new object:
const newCar = (motor, tires, flex) => {
    return {
        motor: motor,
        tires: tires,
        flex: flex
    }
}

// ES6 you can remove the redudancy just attributing directly:
const newCar = (motor, tires, flex) => {
    return {
        motor,
        tires,
        flex
    }
}


// DEFAULT VALUE AS PARAM
// If an param is not defined, you can attribute an default value to be used.
// This default value will value only and only if the user didnt specified.

const addNumbers = (a = 0  , b = 3) => {
    return a+b; 
}

// We are not passing any param to this function. The default value will be used
// and 3 will return

console.log(addNumbers()); //OUTPUT 3
console.log(addNumbers(7)); //OUTPUT 10 

