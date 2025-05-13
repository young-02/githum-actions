// 다음 함수를 테스트하는 코드를 작성하세요.
const fetchUserData = async (id) => {
  if (id <= 0) {
    throw new Error("Invalid ID");
  }
  return {
    id,
    name: "User " + id,
    isActive: true,
  };
};

test("유효한 ID로 호출 시 올바른 데이터가 반환되는지 확인", async () => {
  await expect(fetchUserData(1)).resolves.toEqual({
    id: 1,
    name: "User 1",
    isActive: true,
  });
});

test("잘못된 ID로 호출 시 에러가 발생하는지 확인", async () => {
  await expect(fetchUserData(-1)).rejects.toThrow("Invalid ID");
});

test("반환된 객체가 올바른 속성(id, name, isActive)을 가지고 있는지 확인", async () => {
  const userData = await fetchUserData(1);
  expect(userData).toHaveProperty("id");
  expect(userData).toHaveProperty("name");
  expect(userData).toHaveProperty("isActive");
});
