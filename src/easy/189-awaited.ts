/* _____________ ここにコードを記入 _____________ */

// type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never;

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
];

// @ts-expect-error
type error = MyAwaited<number>;
