//Spread operator
{
  const str1: string[] = ["Munna", "Hossain", "Mehrab"];
  const str2: string[] = ["Hossain", "Mehrab", "MMM"];

  const res = str1.push(...str2);
  console.log(res);

  //Why I'm getting the length of them?

  const str3: string[] = ["Munna", "Hossain", "Mehrab"];
  const str4: string[] = ["Hossain", "Mehrab", "MMM"];

  const result = [...str3, ...str4];
  console.log(result);
}
