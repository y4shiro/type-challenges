/* _____________ ここにコードを記入 _____________ */

type LengthOfString<
  S extends string,
  T extends readonly any[] = []
> = S extends `${infer F}${infer L}`
  ? LengthOfString<L, [...T, F]>
  : T['length'];

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
];
