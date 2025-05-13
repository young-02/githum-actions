import { act, renderHook } from "@testing-library/react";
import useInputs from "./useInput";
import { ChangeEvent } from "react";

describe("useInput 훅 테스트", () => {
  const initialValues = { name: "김철수" };
  test("initialValues로 전달한 객체가 values에 올바르게 설정되는지 ", () => {
    const { result } = renderHook(() => useInputs(initialValues));
    expect(result.current.values).toEqual(initialValues);
  });

  test("handlechange로 값을 변경했을 때 업데이트", () => {
    const { result } = renderHook(() => useInputs({}));

    const mockEvent = {
      target: { name: "name", value: "김철수" },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });

    expect(result.current.values).toEqual({ name: "김철수" });
  });

  test("여러번 업데이트", () => {
    const { result } = renderHook(() => useInputs({}));

    const mockEvent = {
      target: { name: "name", value: "김철수" },
    } as ChangeEvent<HTMLInputElement>;

    const mockEvent2 = {
      target: { name: "name", value: "김영수" },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });
    expect(result.current.values).toEqual({ name: "김철수" });
    act(() => {
      result.current.handleChange(mockEvent2);
    });
    expect(result.current.values).toEqual({ name: "김영수" });
  });

  test("reset", () => {
    const { result } = renderHook(() => useInputs({}));

    const mockEvent = {
      target: { name: "name", value: "김철수" },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });
    expect(result.current.values).toEqual({ name: "김철수" });
    act(() => {
      result.current.reset();
    });
    expect(result.current.values).toEqual({});
  });
});

test("reset", () => {
  const { result } = renderHook(() => useInputs({}));

  act(() => {
    result.current.reset();
  });
  expect(result.current.values).toEqual({});
});
