/* _____________ ここにコードを記入 _____________ */

type Merge<
  F extends Record<string, unknown>,
  S extends Record<string, unknown>
> = {
  [P in keyof F | keyof S]: P extends keyof S
    ? S[P]
    : P extends keyof F
    ? F[P]
    : never;
};
type T1 = Merge<Foo, Bar>;

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];
