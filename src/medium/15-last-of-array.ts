/* _____________ ここにコードを記入 _____________ */

type Last<T extends any[]> = T extends [...any, infer L] ? L : never;

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
