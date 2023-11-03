// destructuring
{
  // obj
  const user = {
    id: 34,
    name: {
      firstName: "Mehrab",
      middleName: "Hossain",
      lastName: "Munna",
    },
    contactNo: "017000000",
  };

  const {
    contactNo,
    name: { middleName: midName },
  } = user;

  //array
  const myFriends = ["Monica", "Rachel", "Lavlu", "Bablu", "Kablu"];
  const [a, b, bestFriend, ...rest] = myFriends;

  console.log(a);
  console.log(bestFriend);
  console.log(rest);
}
