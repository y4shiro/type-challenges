/* _____________ ここにコードを記入 _____________ */

type HelloWorld = string; // expected to be a string

/* _____________ テストケース _____________ */
import { Equal, Expect, NotAny } from '@type-challenges/utils';

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
