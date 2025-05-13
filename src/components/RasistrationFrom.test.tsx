import { render, screen } from "@testing-library/react";
import RegistrationForm from "./resistrationFrom";

test("회원가입 폼 테스트 (접근성 우선순위 적용)", () => {
  render(<RegistrationForm />);

  const heading = screen.getByRole("heading", { name: "회원가입" });
  const usernameInput = screen.getByRole("textbox", { name: "사용자 이름:" });
  const submitButton = screen.getByRole("button", { name: "가입하기" });

  const passWordInput = screen.getByLabelText("비밀번호:");

  expect(heading).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(passWordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
