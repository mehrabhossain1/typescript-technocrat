{
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Mehrab",
    age: 23,
    gender: "male",
    address: "bsl",
  };
  const student2: Student = {
    name: "Munna",
    age: 32,
    contactNo: "01800000",
    gender: "male",
    address: "bsl",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const name: UserName = "Mehrab";
  const isAdmin: IsAdmin = true;

  //   type alias in function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
