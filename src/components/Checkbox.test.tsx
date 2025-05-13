import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

test("체크박스", () => {
  render(<Checkbox />);

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
