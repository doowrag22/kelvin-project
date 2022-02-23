const kelvin = 293;
//we created a constant called kelvin with value 293

const celsius = kelvin - 273;
//creating a constant that is kelvin degrees minus 273

var fahrenheit = celsius * (9/5) +32;
//created math calculation for changing celsius to fahrenheit

var fahrenheit = Math.floor(fahrenheit);
//rounding down fahrenheit

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
