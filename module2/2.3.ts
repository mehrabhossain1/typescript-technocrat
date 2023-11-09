{
  const numbers: number[] = [1, 3, 5];
  const numbersGen: Array<number> = [23, 535];

  type TGenericArray<T> = Array<T>;
  const mentors: TGenericArray<string> = ["s", "m"];
}
