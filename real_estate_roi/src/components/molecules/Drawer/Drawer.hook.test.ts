/**
 * node_modules
 */
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";

/**
 * private modules
 */
import { useDrawer, Params } from "./Drawer.hook";

/*********************************
 * デフォルトパラメータ・共通処理定義
 *********************************/
const mockOnToggleNavigationOpen = jest.fn();
const params: Params = {
  onToggleNavigationOpen: mockOnToggleNavigationOpen,
  isNavigationOpend: false,
};

/**
 * 共通事前処理
 */
const setUp = (params: Params) => {
  const renderResult = renderHook(() => useDrawer(params));
  return renderResult;
};

/*********************************
 * ライフサイクル
 *********************************/
afterEach(() => {
  jest.resetAllMocks();
});

describe("Drawer Hooks", () => {
  const { result } = setUp(params);
  it("params", () => {
    result.current.onNavigationButtonClick({
      target: {},
    } as React.MouseEvent<HTMLButtonElement, MouseEvent>);
    expect(mockOnToggleNavigationOpen).toHaveBeenCalledTimes(1);
  });
});
