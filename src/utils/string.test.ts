import { capitalize, truncate } from "./stringUtils";

describe("capitalize", () => {
  test("문자열의 첫 글자를 대문자로 변환해야 해야함", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test('빈 문자열(""), null, undefined에 대해 빈 문자열을 반환해야 함', () => {
    expect(capitalize("")).toBe("");
    //@ts-expect-error 타입체크무시
    expect(capitalize(null)).toBe("");
    //@ts-expect-error 타입체크무시
    expect(capitalize(undefined)).toBe("");
  });

  test("한 글자 문자열도 처리해야 함", () => {
    expect(capitalize("a")).toBe("A");
  });
});

describe("truncate함수 테스트", () => {
  test("최대 길이보다 짧은 문자열은 그대로 반환해야 함", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });

  test("최대 길이보다 긴 문자열은 자르고 말줄임표를 추가해야 함", () => {
    expect(truncate("hello", 4)).toBe("hell...");
  });

  test("사용자 정의 말줄임표( […])를 사용할 수 있어야 함", () => {
    expect(truncate("hello", 4, " […]")).toBe("hell […]");
  });
  test("빈 문자열, null, undefined에 대해 빈 문자열을 반환해야 함", () => {
    //@ts-expect-error 타입체크무시
    expect(truncate("")).toBe("");
    //@ts-expect-error 타입체크무시
    expect(truncate(null)).toBe("");
    //@ts-expect-error 타입체크무시
    expect(truncate(undefined)).toBe("");
  });
});
