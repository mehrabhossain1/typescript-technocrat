{
  const age: number = 29;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 19 ? "adult" : "not adult";
  //   console.log({ isAdult });

  //   Nullish coalescing operator

  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ result1 }, { result2 });

  //   optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      permanentaddress: string;
      presentaddress?: string;
    };
  };

  const user: User = {
    name: "Mehrab",
    address: {
      city: "bsl",
      permanentaddress: "bsl",
    },
  };

  const presentaddress = user.address.presentaddress ?? "No present address";
  console.log({ presentaddress });
}
