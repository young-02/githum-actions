test("객체에 특정 속성이 있는지 확인", () => {
  const user = {
    name: "John",
    age: 30,
    address: {
      city: "seoul",
      country: "korea",
    },
  };

  expect(user).toHaveProperty("name");
  expect(user).toHaveProperty("age");
  expect(user).toHaveProperty("address");
  expect(user).toHaveProperty("name", "John");
  expect(user).toEqual(
    expect.objectContaining({
      name: "John",
      age: 30,
    }),
  );
});

test("배열", () => {
  const fruits = ["apple", "banana", "orange"];

  expect(fruits).toEqual(expect.arrayContaining(["banana", "apple"]));
});

test("문자열이 특정 부분 문자열을 포함하는지 확인", () => {
  expect("Hello World").toEqual(expect.stringContaining("World"));
});

test("객체의 message 속성이 특정 문자열을 포함하는지 확인", () => {
  const response = {
    status: 200,
    message: "operation completed successfully",
  };
  expect(response).toEqual({
    status: 200,
    message: expect.stringContaining("complete"),
  });
});

test("mock 함수가 호출 되었는지 확인", () => {
  const mockFn = jest.fn();

  mockFn();
  // mock함수가 실행됐는지 확인
  expect(mockFn).toHaveBeenCalled();
});

test("mock함수가 정확히 3번 호출되었는지 확인", () => {
  const mockFn = jest.fn();

  mockFn();
  mockFn();
  mockFn();

  expect(mockFn).toHaveBeenCalledTimes(3);
});

test(" mock 함수의 마지막 호풀 인자 확인", () => {
  const mockFn = jest.fn();

  mockFn("first");
  mockFn("second");

  expect(mockFn).toHaveBeenLastCalledWith("second");
});

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 1000);
  });
};

test("promise가 특정 값으로 resolve되는지 확인", async () => {
  await expect(fetchData()).resolves.toBe("success");
});
