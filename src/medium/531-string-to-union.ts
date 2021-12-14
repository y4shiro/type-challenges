/* _____________ ここにコードを記入 _____________ */

type StringToUnion<
  T extends string,
  U extends any[] = []
> = T extends `${infer L}${infer R}` ? StringToUnion<R, [...U, L]> : U[number];
type T1 = StringToUnion<'hello'>;

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<
    Equal<
      StringToUnion<'coronavirus'>,
      'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'
    >
  >
];
