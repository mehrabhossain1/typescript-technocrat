{
  // type guard
  // typeof --> type guard
  type TAlphanumeric = string | number;
  const add = (param1: TAlphanumeric, param2: TAlphanumeric): TAlphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  //   type in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and I'm ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };
}
