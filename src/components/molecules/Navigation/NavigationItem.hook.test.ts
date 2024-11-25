/**
 * node_modules
 */
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { Assignment as AssignmentIcon } from "@mui/icons-material";
/**
 * project modules
 */

/**
 * private modules
 */
import { useNavigationItem, type Params } from "./NavigationItem.hook";

/*********************************
 * デフォルトパラメータ・共通処理定義
 *********************************/
const defaultParams: Params = {
  children: "defaultChildren",
  toUri: "defaultTOUrl",
  Icon: AssignmentIcon,
  selected: false,
  disabled: false,
  tooltipTitle: "defaultTooltipTitle",
};

/**
 * 共通事前処理
 */
const setUp = (params: Params) => {
  const renderResult = renderHook(() => {
    return useNavigationItem(params);
  });
  return {
    ...renderResult,
  };
};

/*********************************
 * ライフサイクル
 *********************************/
beforeAll(() => {
  // console.log("beforeAll");
});
beforeEach(() => {
  // console.log("beforeEach");
});
afterEach(() => {
  // console.log("afterEach");
  jest.resetAllMocks();
});
afterAll(() => {
  // console.log("afterAll");
});

describe("NavigationItem Hooks", () => {
  it("params", () => {
    const { result } = setUp(defaultParams);
    // children
    expect(result.current.children).toEqual(defaultParams.children);
    // toUri
    expect(result.current.toUri).toEqual(defaultParams.toUri);
    // Icon
    expect(result.current.Icon).toEqual(defaultParams.Icon);
    // disabled
    expect(result.current.disabled).toEqual(defaultParams.disabled);
    // tooltipTitle
    expect(result.current.tooltipTitle).toEqual(defaultParams.tooltipTitle);
  });
});
