import { Color } from "../types";

const myColor: Color = Color.Red;
console.log(myColor);

const yourColor = Color.Blue;
console.log(yourColor);

const chorock: Color = Color.Green;
console.log(chorock);

// const colorOfSky: Color.Blue = Color.Green;

console.log("----------");

const faveColor: Color = "Red" as Color;
console.log(faveColor);

// 강제로 캐스팅하게 되면 Potato 는 컬러가 아니지만 컴파일 되는것을 볼 수 있다.
// 이런 현상을 막기위해 가급적 typecasting 은 하지 않는게 좋다.
const imposterColor: Color = "Potato" as Color;
console.log(imposterColor);
