import { render, screen } from "@testing-library/react";
import NavBar from "./Navbar";

test("navBar", () => {
  render(<NavBar />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText("검색어를 입력하세요");
  expect(searchInput).toBeInTheDocument();

  const buttonText = screen.getByRole("button", { name: "로그인" });
  expect(buttonText).toBeInTheDocument();
});
