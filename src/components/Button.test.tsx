import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

test("버튼화면 표시", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>버튼내용</Button>);
  const button = screen.getByText("버튼내용");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("버튼화면 표시", () => {
  const handleClick = jest.fn();
  render(
    <Button onClick={handleClick} disabled={true}>
      버튼내용
    </Button>,
  );
  const button = screen.getByText("버튼내용");
  fireEvent.click(button);
  expect(button).toBeDisabled();
});
