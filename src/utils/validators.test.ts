import { validateEmail } from "./validators";

test("유효한 이메일 주소 검증", () => {
  expect(validateEmail("test@example.com")).toBeTruthy();
  expect(validateEmail("user@example.com")).toBeTruthy();
});

import { validateUser } from "./validators";

test("유효한 사용자 객체를 검증해야 함", () => {
  const validUser = {
    name: "김철수",
    email: "kim@example.com",
  };

  expect(validateUser(validUser)).toBeTruthy();
});

test("선택적 필드를 포함한 유효한 사용자 객체를 검증해야 함", () => {
  const validUserWithAge = {
    name: "김철수",
    email: "kim@example.com",
    age: 30,
  };

  expect(validateUser(validUserWithAge)).toBeTruthy();
});

test("이메일이 없는 경우 유효하지 않음", () => {
  const userWithoutEmail = {
    name: "김철수",
  };

  // @ts-expect-error 타입 검사 예외
  expect(validateUser(userWithoutEmail)).toBeFalsy();
});

test("이름이 없는 경우 유효하지 않음", () => {
  const userWithoutName = {
    email: "kim@example.com",
  };

  // @ts-expect-error 타입 검사 예외
  expect(validateUser(userWithoutName)).toBeFalsy();
});

test("이메일 형식이 올바르지 않은 경우 유효하지 않음", () => {
  const userWithInvalidEmail = {
    name: "김철수",
    email: "invalid-email",
  };

  expect(validateUser(userWithInvalidEmail)).toBeFalsy();
});

test("이름 길이가 너무 짧은 경우 유효하지 않음", () => {
  const userWithShortName = {
    name: "J",
    email: "kim@example.com",
  };

  expect(validateUser(userWithShortName)).toBeFalsy();
});

test("나이가 음수인 경우 유효하지 않음", () => {
  const userWithNegativeAge = {
    name: "김철수",
    email: "kim@example.com",
    age: -5,
  };

  expect(validateUser(userWithNegativeAge)).toBeFalsy();
});

test("객체가 아닌 입력은 유효하지 않음", () => {
  // @ts-expect-error 타입 검사 예외
  expect(validateUser(null)).toBeFalsy();
  // @ts-expect-error 타입 검사 예외
  expect(validateUser(undefined)).toBeFalsy();
  // @ts-expect-error 타입 검사 예외
  expect(validateUser("string")).toBeFalsy();
  // @ts-expect-error 타입 검사 예외
  expect(validateUser(123)).toBeFalsy();
});
