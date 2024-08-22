
//promt user for flavors
const flavors = prompt ("Please enter a list of comma seperated flavors.")

//parse input into an array of flavor
const inputFlavors = flavors.split(" , ")

//create object for flavors
const froy = {

};

//you are looping through the array
for (let i = 0; i < inputFlavors.length; i++) {

}

// loop of array and detemine if flavor exists and increase count  
for (let i = 0; i < flavors.length; i++) {

}

// does the key vanilla exist in my froyo object
const createSimpleObject = (key, value) => {
    const obj= {};
    obj[key] = value;
    return obj;
}

//if not create key and set value by 1
const froyo = createSimpleObject("vanilla", 1);
console.log(froyo)