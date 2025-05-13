import { render, screen } from "@testing-library/react";
import SearchForm from "./searchForm";
import userEvent from "@testing-library/user-event";

test("검색 userEvent로 하기", async () => {
  const user = userEvent.setup();
  const handleSearch = jest.fn();
  render(<SearchForm onSearch={handleSearch} />);

  const searchInput = screen.getByLabelText("검색:");
  const searchButton = screen.getByRole("button");

  await user.type(searchInput, "test");
  await user.click(searchButton);
  expect(handleSearch).toHaveBeenCalledWith("test");
});
