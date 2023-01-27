export enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

export enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// type TThingsInLife = {
//     colorOfPen: Color;
//     keyboardArrow: Direction;
// }

export interface ThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}

type TableData = {
  [x: string]: string;
};

export const enum TableKey {
  ID = "ID",
  FirstName = "firstName",
  LastName = "lastName",
  Score = "score",
}

export interface MyInterface {
  value: string | number | string[];
}

export interface MyInterfaceG<T> {
  value: T;
}