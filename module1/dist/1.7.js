"use strict";
//Spread operator
{
    // arr
    const str1 = ["Munna", "Hossain", "Mehrab"];
    const str2 = ["Hossain", "Mehrab", "MMM"];
    str1.push(...str2);
    const res = str1.push(...str2);
    //   console.log(str1);
    //   console.log(res);
    //Why I'm getting the length of them?
    const str3 = ["Munna", "Hossain", "Mehrab"];
    const str4 = ["Hossain", "Mehrab", "MMM"];
    const result = [...str3, ...str4];
    //   console.log(result);
    // Obj
    const mentors1 = {
        typescript: "mexba",
        prisma: "Mir",
        redux: "Munna",
    };
    const mentors2 = {
        dbms: "Firoz",
        js: "Mehrab",
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    console.log(mentorsList);
    //   Rest Operator
    const greetFriends = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    const hiBros = (...bros) => {
        bros.forEach((bro) => console.log(`Hy ${bro}`));
    };
    greetFriends("Munna", "Nunna", "Onna");
    hiBros("Nunna", "chinna");
}
