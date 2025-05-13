import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter 훅테스트", () => {
  test("초기깂 test", () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
  });

  test("increment 함수 테스트", () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(11);
  });

  test("decrement", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  test("reset", () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);

    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
