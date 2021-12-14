/* _____________ ここにコードを記入 _____________ */

type Flatten<T extends any[]> = T extends [infer F, ...infer L]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<L>]
    : [F, ...Flatten<L>]
  : [];

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>,
      [{ foo: 'bar'; 2: 10 }, 'foobar']
    >
  >
];
