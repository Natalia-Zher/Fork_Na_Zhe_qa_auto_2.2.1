# Assignment Operators in JavaScript

## Simple Assignment (`=`)
The `=` operator assigns a value to a variable.

```js
let x = 10;
```

## Addition Assignment (`+=`)
Adds the right operand to the left operand and assigns the result.

```js
let x = 5;
x += 3; // Equivalent to: x = x + 3;
console.log(x); // 8
```

## Subtraction Assignment (`-=`)
Subtracts the right operand from the left operand and assigns the result.

```js
let x = 10;
x -= 4; // Equivalent to: x = x - 4;
console.log(x); // 6
```

## Multiplication Assignment (`*=`)
Multiplies the left operand by the right operand and assigns the result.

```js
let x = 4;
x *= 2; // Equivalent to: x = x * 2;
console.log(x); // 8
```

## Division Assignment (`/=`)
Divides the left operand by the right operand and assigns the result.

```js
let x = 10;
x /= 2; // Equivalent to: x = x / 2;
console.log(x); // 5
```

## Remainder Assignment (`%=`)
Computes the remainder of division and assigns the result.

```js
let x = 10;
x %= 3; // Equivalent to: x = x % 3;
console.log(x); // 1
```

## Exponentiation Assignment (`**=`)
Raises the left operand to the power of the right operand and assigns the result.

```js
let x = 2;
x **= 3; // Equivalent to: x = x ** 3;
console.log(x); // 8
```

## Bitwise AND Assignment (`&=`)
Performs a bitwise AND operation and assigns the result.

```js
let x = 5; // 0101 in binary
x &= 3; // Equivalent to: x = x & 3;
console.log(x); // 1 (0001 in binary)
```

## Bitwise OR Assignment (`|=`)
Performs a bitwise OR operation and assigns the result.

```js
let x = 5; // 0101 in binary
x |= 3; // Equivalent to: x = x | 3;
console.log(x); // 7 (0111 in binary)
```

## Bitwise XOR Assignment (`^=`)
Performs a bitwise XOR operation and assigns the result.

```js
let x = 5; // 0101 in binary
x ^= 3; // Equivalent to: x = x ^ 3;
console.log(x); // 6 (0110 in binary)
```

## Left Shift Assignment (`<<=`)
Shifts bits to the left and assigns the result.

```js
let x = 5; // 00000101 in binary
x <<= 2; // Equivalent to: x = x << 2;
console.log(x); // 20 (00010100 in binary)
```

## Right Shift Assignment (`>>=`)
Shifts bits to the right and assigns the result.

```js
let x = 20; // 00010100 in binary
x >>= 2; // Equivalent to: x = x >> 2;
console.log(x); // 5 (00000101 in binary)
```

## Nullish Coalescing Assignment (`??=`)
Assigns a value only if the variable is `null` or `undefined`.

```js
let x = null;
x ??= 10; // Assigns 10 because x is null
console.log(x); // 10

let y = 5;
y ??= 20; // Does not assign because y is already defined
console.log(y); // 5
