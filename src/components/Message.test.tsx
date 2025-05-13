import { render, screen } from "@testing-library/react";
import Message from "./Message";

test("에러가 없는 경우 에러 메세지가 보이지 않는지 테스트 코드를 작성하세요", () => {
  render(<Message isError={false} />);

  const errorMessage = screen.queryByText("오류가 발생했습니다");
  expect(errorMessage).not.toBeInTheDocument();
});

test("에러가 있는 경우 에러 메세지가 보이고", () => {
  render(<Message isError={true} />);

  const errorMessage = screen.getByText("오류가 발생했습니다");
  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveClass("error");
});
