import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

test("userProfile", () => {
  render(<UserProfile name="홍길동" isVerified={true} />);

  const headingText = screen.getByRole("heading", {
    name: "홍길동님의 프로필",
  });
  expect(headingText).toBeInTheDocument();

  const img = screen.getByAltText("프로필 이미지");
  expect(img).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "프로필 수정" });
  expect(button).not.toBeDisabled();

  const profileContainer = screen.getByTestId("profile-container");
  expect(profileContainer).toHaveClass("verified");
});
