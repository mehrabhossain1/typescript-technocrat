let firstName: string = "Mehrab";

let num: number[] = [23, 34];

let names: [string, number] = ["Mehrab", 23];

const user: {
  //   company: "PHero"; //type literal
  readonly company: string;
  firstName: string;
  middleName?: string; //Optional type
  lastName: string;
} = {
  company: "PHero",
  firstName: "Mehrab",
  lastName: "Munna",
};

// user.company = "PHero2";
