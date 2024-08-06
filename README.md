# compare-arrays-ignoring-order

This is a very simple library containing a function that allows you to compare arrays ignoring their order. This means that if two arrays have some elements mixed up, the function will return true.

![compare ext arrays ignoring order](https://aptukov.com/third_party_assets/compare-arrays-ignoring-order/image.png)

## Content:

[Install](#install)

[Usage](#usage)

## Install

**npm**:

```bash
npm i compare-arrays-ignoring-order
```

**yarn**:

```bash
yarn add compare-arrays-ignoring-order
```

### Import

To import the compare function, use:

```typescript
import isEqualArraysIgnoreOrder from "compare-arrays-ignoring-order";
```

### Usage

The function has the following declaration:

```typescript
function isEqualArraysIgnoreOrder(a: any, b: any): boolean;
```

And to use it, you must pass in arguments the two arrays you want to compare without regard to order:

```typescript
const equal = isEqualArraysIgnoreOrder([1, 3, 2], [1, 2, 3]); // return true
```

However, if you pass arrays with different elements (even without regard to order) or with different numbers of elements, the function will return false.

Autotests are used to test the function. In order to better understand the operation of the function, see the tests walkthrough below:

```typescript
isEqualArraysIgnoreOrder([], []) === true;

isEqualArraysIgnoreOrder([], [1]) === false;

isEqualArraysIgnoreOrder([2], [2]) === true;

isEqualArraysIgnoreOrder([{ a: 1, b: 2 }], [{ a: 1, b: 2 }]) === true;

isEqualArraysIgnoreOrder([{ a: "hi", b: true }], [{ b: true, a: "hi" }]) ===
  true;

isEqualArraysIgnoreOrder([{ a: "hii", b: true }], [{ b: true, a: "hi" }]) ===
  false;

isEqualArraysIgnoreOrder(
  [{ el: { a: true, b: 18, c: "hello" } }, 4, { s: 18, ff: { aa: { d: 7 } } }],
  [4, { s: 18, ff: { aa: { d: 7 } } }, { el: { b: 18, c: "hello", a: true } }]
) === true;

isEqualArraysIgnoreOrder(
  [{ el: { a: true, b: 18, c: "hello" } }, 4],
  [4, { el: { b: 5, c: "hello", a: true } }]
) === false;

isEqualArraysIgnoreOrder(
  [{ el: { a: true, b: 18, c: "hello" } }, 4],
  [4, { el: { b: 18, c: "hello", a: true } }, 1]
) === false;

isEqualArraysIgnoreOrder(
  [{ el: { a: true, b: 18, c: "hello" } }, 4],
  undefined
) === false;
```

Best regards, Anatoliy Aptukov.
