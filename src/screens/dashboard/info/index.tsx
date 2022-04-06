import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Info: React.FC = () => {
  const text: string = "a";
  const digit: number = 123;
  const isDone: boolean = true;
  const fruitsArray: string[] = ["apple", "orange", "banana"];
  const numArray: number[] = [1, 2, 3, 5, 5];
  const anything: any = [1, "string", true]; 

  //Parameter type annotation
  function greet(name: string) {
    console.log("Hello", + name.toUpperCase() + "!")
  }
  greet("Janson");

  //Return type annotation
  function getFavoriteNumber(): number {
    return 26;
  }

  //Anonymous function
  const names = ["Alice", "Bob", "Eve"];

  //Contextual typing for function
  names.forEach(function (s) {
    console.log(s.toUpperCase());
  })

  //Arrow function
  names.forEach((s) => {
    console.log(s.toUpperCase())
  })

  //Object types
  //Parameter's annotation is an object type
  function printCoor(pt: {x: number, y: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }

  printCoor({x: 10, y: 15});

function printName(obj: {first: string; last?: string}) {
  //Error - might crash if'obj.last' wasn't provided
  console.log(obj.last?.toUpperCase());

  //Object is possibly 'undefine'
  if (obj.last !== undefined) {
    //OK
    console.log(obj.last.toUpperCase());
  }
  console.log(obj.last?.toUpperCase());
  
}

//Union types
//Either pass in string or number
function printId(id: number | string) {
  console.log("Your ID is: " + id);
  
}
//OK
printId(88);
//OK
printId("99");


//Type Alias
type Point = {
  x: number;
  y: number;
};
function printCooor(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoor({x: 123, y: 456});

//Interfaces
interface Points {
  x: number;
  y: number;
}

function printCoord(pt: Points) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 100, y: 500});

function printText(s: string, alignment: "left" | "right" | "center") {

}

//enum
enum Color {Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Green;
console.log(backgroundColor);

//Normal function 
function checkNumValue(num1: number, num2: number): number {
  //Ternary operator. if a value is less than b value, print a value otherwise print b value 
  return num1 < num2 ? num1 : num2;
}
console.log(checkNumValue(50, 100));
console.log(checkNumValue(100, 65));

//Arrow function
const checkChar = (charA: string, charB: string): string => {
  return charA < charB ? charA : charB;
}
console.log(checkChar("z", "a"));

//Generic function
const checkValue = <T,> (valueA: T, valueB: T): T => {
  return valueA < valueB? valueA : valueB;
}
console.log(checkValue(999, 555));
console.log(checkValue("a", "z"));

function checkNum<T>(num1: T, num2: T): T {
  return num1 < num2? num1 : num2;
}
console.log(checkNum(3223, 8777));
console.log(checkNum("10cvf", "20cde"));

//Function Type: Define a function and asign it to a variable
//Function with one parameter 'name' of number type with no return value (void)
type Greeting = (name: string) => void;
const greeter: Greeting = (name: string) => {
  console.log("Hello " + name);
}
greeter("Janson")

//Call Signatures function
type DescribableFunction = {
  description: string;
  (numValue: number): boolean;
};
const myDescFn: DescribableFunction = (numValue: number) => numValue > 10;
myDescFn.description = "To check whether numValue greater than 10, if yes than print true.";
function doSomething(fn: DescribableFunction) {
  console.log(fn.name + " returned " + fn(6));
}
doSomething(myDescFn);

//Optional Parameter
const print = (sentence?: string) => {
  console.log(sentence? sentence : "nothing to print");
}
print()
print("I tell you.")

//Rest parameter
const printNumber = (index1: number, index2: number, index3: number, ...restOfIndex: number[]) => {
  console.log("Index 1 to be remove : ", index1);
  console.log("Index 2 to be remove: ", index2);
  console.log("Left indexes to be print: ", restOfIndex);  
};
printNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Parameter Destructing
const sum = ({x, y, z}: {x: number; y: number; z: number}): void => {
  console.log(x + y + z);
}
sum({x: 10, y: 20, z: 30});

const addAll = (x: number, y: number, z: number) => {
  console.log( x + z + y );
}
addAll(10, 20, 30);




  return (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this hello
      </Text>
    </View>
  );
};

export default Info;
