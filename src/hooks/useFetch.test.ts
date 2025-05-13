// hooks/useFetch.test.ts

import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

describe("useFetch 훅 테스트", () => {
  test("에러가 발생하면 error가 올바르게 설정된다.", async () => {
    server.use(
      http.get("/api/posts", () => {
        return HttpResponse.json(
          {
            message: "에러 발생",
          },
          { status: 500 },
        );
      }),
    );
  });
});
