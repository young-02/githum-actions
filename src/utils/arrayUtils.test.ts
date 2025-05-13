// 2. 빈 배열에 대해 null을 반환하는지 테스트
// 3. 배열이 아닌 입력에 대해 null을 반환하는지 테스트

// 4. 결과 객체가 예상한 모든 속성을 포함하는지 테스트 (`toHaveProperty` 사용)

import { processArray } from "./arrayUtils";

test("정상적인 배열 입력에 대해 올바른 결과 객체를 반환하는지 테스트", () => {
  expect(processArray([1, 2, 3])).toEqual(
    expect.objectContaining({
      sum: 6,
      average: 2,
      max: 3,
      min: 1,
    }),
  );
});

test("빈 배열에 대해 null을 반환하는지 테스트", () => {
  expect(processArray([])).toBeNull();
});

test("배열이 아닌 입력에 대해 null을 반환하는지 테스트", () => {
  //@ts-expect-error 타입체크무시
  expect(processArray("not an array")).toBeNull();
  //@ts-expect-error 타입체크무시
  expect(processArray(null)).toBeNull();
});

test("결과 객체가 예상한 모든 속성을 포함하는지 테스트", () => {
  const result = processArray([1, 2, 3]);
  expect(result).toHaveProperty("sum");
  expect(result).toHaveProperty("average");
  expect(result).toHaveProperty("max");
  expect(result).toHaveProperty("min");
});
