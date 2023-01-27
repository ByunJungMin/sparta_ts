import { Color, TableKey } from "../types";

const keys = Object.keys(Color);
console.log(keys);

console.log("-------------");

const values = Object.values(Color);
console.log(values);

type ObjectType = {
  [key in Color]?: string;
};

const myObject: ObjectType = {};

values.forEach((key) => {
  myObject[key] = "hello";
});

console.log(myObject);

console.log("---------------------");

const keyValues = Object.entries(Color);

console.log(keyValues);

type StrictTableData = { [key in TableKey]: string };
type LessStrictTableData = { [key in TableKey]?: string };

const myTableData: LessStrictTableData = {
  ID: "1",
  firstName: "jane",
  lastName: "doe",
};

console.log(myTableData);
