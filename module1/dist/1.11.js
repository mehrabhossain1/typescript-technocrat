"use strict";
var _a;
{
    const age = 29;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    const isAdult = age >= 19 ? "adult" : "not adult";
    //   console.log({ isAdult });
    //   Nullish coalescing operator
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: "Mehrab",
        address: {
            city: "bsl",
            permanentaddress: "bsl",
        },
    };
    const presentaddress = (_a = user.address.presentaddress) !== null && _a !== void 0 ? _a : "No present address";
    console.log({ presentaddress });
}
