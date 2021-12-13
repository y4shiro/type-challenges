/* _____________ ここにコードを記入 _____________ */

type Pop<T extends any[]> = T extends [...infer F, any] ? F : never;

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>
];
