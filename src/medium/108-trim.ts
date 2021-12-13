/* _____________ ここにコードを記入 _____________ */

type spaces = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${spaces}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${spaces}`
  ? Trim<L>
  : S;

/* _____________ テストケース _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>
];
