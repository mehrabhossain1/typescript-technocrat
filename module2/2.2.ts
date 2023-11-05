{
  type TUser = {
    name: string;
    age: number;
  };
  interface IUser1 {
    name: string;
    age: number;
  }

  const user1: TUser = {
    name: "Mehrab",
    age: 23,
  };

  type TRole = {
    role: "active" | "inactive";
  };

  type TUserWithRole = TUser & TRole; //Intersection
  const userR: TUserWithRole = {
    name: "Munna",
    age: 23,
    role: "active",
  };

  interface IUser1 {
    name: string;
    age: number;
  }
  interface IUserWithRole extends IUser1 {
    role: string;
  }
  const userWithInterface: IUserWithRole = {
    name: "Munna",
    age: 23,
    role: "manager",
  };

  interface IUser {
    name: string;
    age: number;
  }
  const user2: IUser = {
    name: "Munna",
    age: 23,
  };

  type TAddress = {
    presentAddress: string;
    permanentAddress: string;
  };
  const address1: TAddress = {
    presentAddress: "IND",
    permanentAddress: "BD",
  };

  interface IAddress {
    presentAddress: string;
    permanentAddress: string;
  }
  const address2: IAddress = {
    presentAddress: "hb",
    permanentAddress: "DB",
  };

  // array
  type TRoll = number[];
  const roll1: TRoll = [1, 2, 3];

  interface IRoll {
    [index: number]: number;
  }
  const roll2: IRoll = [2, 3, 4];

  // function
  type TAdd = (num1: number, num2: number) => number;
  interface IAdd {
    (num1: number, num2: number): number;
  }

  const add: TAdd = (num1, num2) => num1 + num2;
  const add2: IAdd = (num1, num2) => num1 + num2;
}
