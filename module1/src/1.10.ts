{
  // Union type
  //   type FrontendDev = "frontEnd" | "backEnd";
  //   type FullstackDev = "backend" | "fullstackDev";

  //   type developer = FrontendDev | FullstackDev;

  //   const newDev: FrontendDev = "frontEnd";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "AB+" | "B+" | "O+";
  //   };

  //   const newUser: User = {
  //     name: "Mehrab",
  //     gender: "male",
  //     bloodGroup: "AB+",
  //   };

  //   Intersection type

  type FrontendDev = {
    skills: string[];
    designation1: "Frontend";
  };

  type BackendDev = {
    skills: string[];
    designation2: "Backend";
  };

  type FullstackDev = FrontendDev & BackendDev;
  const fullstackDev: FullstackDev = {
    skills: ["html", "css", "js"],
    designation1: "Frontend",
    designation2: "Backend",
  };
}
