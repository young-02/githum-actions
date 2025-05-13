import { validateUsername } from "./stringValidator";

test("유효한 사용자 이름이 true를 반환하는지?", () => {
  expect(validateUsername("john123")).toBeTruthy();
  expect(validateUsername("john")).toBe(true);
});

test("특수문자 포함된 이름", () => {
  expect(validateUsername("tjdg@")).toBeFalsy();
});

test("길이제한 검사", () => {
  expect(validateUsername("ab")).toBeFalsy();
  //a를 21번 반복한 문자열이 면 false
  expect(validateUsername("a".repeat(21))).toBeFalsy();
});

test("잘못된 입력", () => {
  //@ts-expect-error 타입 오류 발생
  expect(validateUsername(null)).toBeFalsy();
  //@ts-expect-error 타입 오류 발생
  expect(validateUsername(123)).toBeFalsy();
});
