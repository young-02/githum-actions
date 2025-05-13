import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

test("input 할일 상태 업데이트", () => {
  render(<TodoForm />);

  const input = screen.getByRole("textbox", { name: "할 일:" });
  expect(input).toHaveValue("");
  fireEvent.change(input, { target: { value: "할일" } });
  expect(input).toHaveValue("할일");
});
