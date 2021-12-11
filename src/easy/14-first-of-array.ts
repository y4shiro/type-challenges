/* _____________ ここにコードを記入 _____________ */

type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // 'a'
type head2 = First<arr2>; // 3

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];
