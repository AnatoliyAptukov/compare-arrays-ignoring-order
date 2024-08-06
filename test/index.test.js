import isEqualArraysIgnoreOrder from "../dist/index";
describe("index.ts", () => {
  test("Compare two empty arrays: isEqualArraysIgnoreOrder([], [])", () => {
    const result = isEqualArraysIgnoreOrder([], []);
    expect(result).toEqual(true);
  });
  test("Compare empty and non-empty arrays: isEqualArraysIgnoreOrder([], [1])", () => {
    const result = isEqualArraysIgnoreOrder([], [1]);
    expect(result).toEqual(false);
  });
  test("Compare two same non-empty arrays with one length: isEqualArraysIgnoreOrder([2], [2])", () => {
    const result = isEqualArraysIgnoreOrder([2], [2]);
    expect(result).toEqual(true);
  });
  test("Compare two same non-empty arrays with object elements: isEqualArraysIgnoreOrder([{a:1, b:2}], [{a:1, b:2}])", () => {
    const result = isEqualArraysIgnoreOrder([{ a: 1, b: 2 }], [{ a: 1, b: 2 }]);
    expect(result).toEqual(true);
  });
  test("Compare two non-empty arrays with jumbled object elements: isEqualArraysIgnoreOrder([{a:'hi', b:true}], [{b:true, a:'hi'}])", () => {
    const result = isEqualArraysIgnoreOrder(
      [{ a: "hi", b: true }],
      [{ b: true, a: "hi" }]
    );
    expect(result).toEqual(true);
  });
  test("Compare two non-empty arrays with jumbled and different object elements: isEqualArraysIgnoreOrder([{a:'hii', b:true}], [{b:true, a:'hi'}])", () => {
    const result = isEqualArraysIgnoreOrder(
      [{ a: "hii", b: true }],
      [{ b: true, a: "hi" }]
    );
    expect(result).toEqual(false);
  });
  test('Compare two non-empty arrays with more deep jumbled object elements: isEqualArraysIgnoreOrder({ el: { a: true, b: 18, c: "hello" } },4,{ s: 18, ff: { aa: { d: 7 } } },],[4,{ s: 18, ff: { aa: { d: 7 } } },{ el: { b: 18, c: "hello", a: true } },])', () => {
    const result = isEqualArraysIgnoreOrder(
      [
        { el: { a: true, b: 18, c: "hello" } },
        4,
        { s: 18, ff: { aa: { d: 7 } } },
      ],
      [
        4,
        { s: 18, ff: { aa: { d: 7 } } },
        { el: { b: 18, c: "hello", a: true } },
      ]
    );
    expect(result).toEqual(true);
  });
  test('Compare two non-empty arrays with more deep jumbled and different object elements: isEqualArraysIgnoreOrder([{ el: { a: true, b: 18, c: "hello" } }, 4], [4, { el: { b: 18, c: "hello", a: true } }])', () => {
    const result = isEqualArraysIgnoreOrder(
      [{ el: { a: true, b: 18, c: "hello" } }, 4],
      [4, { el: { b: 5, c: "hello", a: true } }]
    );
    expect(result).toEqual(false);
  });
});
