import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("로그인 버튼 클릭하면 ", () => {
  render(<LoginForm />);
  const emailInput = screen.getByRole("textbox", { name: "이메일:" });
  const passWordInput = screen.getByLabelText("비밀번호:");

  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  fireEvent.change(passWordInput, { target: { value: "password123" } });
  expect(emailInput).toHaveValue("test@test.com");
  expect(passWordInput).toHaveValue("password123");
});

test("폼제출이 잘되는지", () => {
  render(<LoginForm />);
  const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

  const emailInput = screen.getByRole("textbox", { name: "이메일:" });
  const passWordInput = screen.getByLabelText("비밀번호:");

  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  fireEvent.change(passWordInput, { target: { value: "password123" } });

  const form = screen.getByRole("form");
  fireEvent.submit(form);
  expect(alertSpy).toHaveBeenCalledWith(
    "로그인 성공 test@test.com password123",
  );

  alertSpy.mockRestore();
});
