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
let backgroundColor = Color.Blue;


  

  return (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this hello
      </Text>
    </View>
  );
};

export default Info;
