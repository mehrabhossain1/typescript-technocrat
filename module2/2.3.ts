{
  // const rollNumbers: number[] = [23,5,4]
  const rollNumbers: Array<number> = [23, 43];

  //   const mentors: string[] = ["Munna", "Mehrab"];
  const mentors: Array<string> = ["Munna", "Mehrab"];

  //   const boolArr: boolean[] = [true, false, true];
  const boolArr: Array<boolean> = [true, false, true];

  type GenericArray<param> = Array<param>;
  //   const rollNums : GenericArray<number> = [2,3,4, '2']
  //   const stNames: GenericArray<string> = ["M", "n", 2];
  const ids: GenericArray<number> = [2, 3, 4, 5];

  type GenericArray2<param> = Array<param>;
  const contacts: GenericArray2<string> = ["st", "ss"];
}
