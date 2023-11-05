{
  // const rollNumbers: number[] = [23,5,4]
  const rollNumbers: Array<number> = [23, 43];

  //   const mentors: string[] = ["Munna", "Mehrab"];
  const mentors: Array<string> = ["Munna", "Mehrab"];

  //   const boolArr: boolean[] = [true, false, true];
  const boolArr: Array<boolean> = [true, false, true];

  type GenericArray<T> = Array<T>;

  //   const rollNums : GenericArray<number> = [2,3,4, '2']
  //   const stNames: GenericArray<string> = ["M", "n", 2];
  const ids: GenericArray<number> = [2, 3, 4, 5];

  type GenericArray2<param> = Array<param>;
  const contacts: GenericArray2<string> = ["st", "ss"];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Mehrab",
      age: 23,
    },
  ];

  // generic tuple
  type TGenericTuple<X, Y> = [X, Y];
  const manush: TGenericTuple<string, number> = ["Mr. X", 23];

  type TGenericTuple2<X, Y> = [X, Y];
  const manush2: TGenericTuple2<string, string> = ["s", "ss"];

  const user4: TGenericTuple<number, { name: string; email: string }> = [
    12,
    { name: "Munna", email: "m@gmail.com" },
  ];
}
