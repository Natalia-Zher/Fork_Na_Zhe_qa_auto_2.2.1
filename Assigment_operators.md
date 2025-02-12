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


# Increment and Decrement in JavaScript

## Increment (`++`)
The increment operator increases a variable's value by 1.

### Postfix Increment (`x++`)
Returns the current value of the variable, then increases it by 1.

```js
let x = 5;
console.log(x++); // 5 (returns the current value, then increments)
console.log(x);   // 6 (now x is incremented)
```

### Prefix Increment (`++x`)
Increases the variable's value first, then returns the new value.

```js
let y = 5;
console.log(++y); // 6 (increments first, then returns the new value)
console.log(y);   // 6 (y is already incremented)
```

## Decrement (`--`)
The decrement operator decreases a variable's value by 1.

### Postfix Decrement (`x--`)
Returns the current value of the variable, then decreases it by 1.

```js
let a = 5;
console.log(a--); // 5 (returns the current value, then decrements)
console.log(a);   // 4 (now a is decremented)
```

### Prefix Decrement (`--x`)
Decreases the variable's value first, then returns the new value.

```js
let b = 5;
console.log(--b); // 4 (decrements first, then returns the new value)
console.log(b);   // 4 (b is already decremented)
```

## Summary
- **Postfix (`x++`, `x--`)**: Returns the original value, then modifies the variable.
- **Prefix (`++x`, `--x`)**: Modifies the variable first, then returns the new value.
