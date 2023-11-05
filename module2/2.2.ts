{
  type TUser = {
    name: string;
    age: number;
  };

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
}
