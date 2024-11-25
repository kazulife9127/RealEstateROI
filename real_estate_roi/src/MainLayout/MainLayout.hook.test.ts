/**
 * node_modules
 */
import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

/**
 * private modules
 */
import { useMainLayout } from "./MainLayout.hook";

/**
 * 共通事前処理
 */
const setUp = () => {
  const renderResult = renderHook(
    () => {
      return useMainLayout();
    },
    { wrapper: MemoryRouter }
  );
  return {
    ...renderResult,
  };
};

/*********************************
 * ライフサイクル
 *********************************/
afterEach(() => {
  jest.resetAllMocks();
});

describe("MainLayout Hooks", () => {
  const { result } = setUp();
  it("params", () => {
    // isNavigationOpend
    expect(result.current.isNavigationOpend).toBeFalsy();

    // onToggleNavigationOpen
    act(() => {
      result.current.onToggleNavigationOpen();
    });
    expect(result.current.isNavigationOpend).toBeTruthy();
    act(() => {
      result.current.onToggleNavigationOpen();
    });
    expect(result.current.isNavigationOpend).toBeFalsy;
  });
});
