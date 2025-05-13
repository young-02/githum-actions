import { fetchUsers, getUser } from "./user";

test("fetchUsers 함수가 사용자 데이터를 반환해야 함", async () => {
  // 모킹된 부분

  const result = await fetchUsers();
  expect(result).toEqual([
    { id: 1, name: "김철수", email: "kim@example.com" },
    { id: 2, name: "이영희", email: "lee@example.com" },
  ]);
});

test("성공적인 API 호출 시 사용자 데이터를 반환해야 함", async () => {
  const result = await getUser(1);
  expect(result).toEqual({
    id: 1,
    name: "김철수",
    email: "kim@example.com",
  });
});
