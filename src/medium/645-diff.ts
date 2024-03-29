/* _____________ Your Code Here _____________ */

// type Diff<O, O1> = {
//   [P in keyof O | keyof O1 as P extends keyof O & keyof O1
//     ? never
//     : P]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never;
// };
type Diff<O, O1> = Required<Omit<O, keyof O1> & Omit<O1, keyof O>>;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>
];
