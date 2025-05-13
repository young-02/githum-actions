import { calculateDiscount } from "./discount";

test("정상적인 가격과 할인율에 대한 계산이 정확한지?", () => {
  expect(calculateDiscount(1000, 10)).toBe(900);
  expect(calculateDiscount(1000, 0)).toBe(1000);
});

test("음수 가격이 입력되었을때 0을 반환 하는지?", () => {
  expect(calculateDiscount(-1000, 10)).toBe(0);
  expect(calculateDiscount(1000, -10)).toBe(0);
});

test("100%를 초과 혹은 음수인 할인율에 대해 0을 반환하는지 테스트", () => {
  expect(calculateDiscount(1000, 101)).toBe(0);
  expect(calculateDiscount(1000, -50)).toBe(0);
});

test("숫자가 아닌 입력에 대해서 0을 반환하는지 테스트", () => {
  // @ts-expect-error 타입 오류 발생
  expect(calculateDiscount("테스트", "잘됨")).toBe(0);
  // @ts-expect-error 타입 오류 발생
  expect(calculateDiscount(null, undefined)).toBe(0);
});
