/**
 * node_modules
 */
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import CommuteIcon from "@mui/icons-material/Commute";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EqualizerIcon from "@mui/icons-material/Equalizer";
/**
 * project modules
 */

/**
 * private modules
 */
import { useNavigation, type Params } from "./Navigation.hook";
import { type Props as ItemProps } from "./NavigationItem";

/*********************************
 * モックのセットアップ
 *********************************/
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

/*********************************
 * デフォルトパラメータ・共通処理定義
 *********************************/
export const defaultNavigationItemList: ItemProps[] = [
  {
    toUri: "/scenario-library",
    Icon: ListIcon,
    children: "Scenario Library",
    selected: false,
    tooltipTitle: "Scenario Library",
  },
  {
    toUri: "/traffic-db",
    Icon: CommuteIcon,
    children: "Traffic Data",
    selected: false,
    tooltipTitle: "Traffic Data",
    disabled: true,
  },
  {
    toUri: "/drivermodel",
    Icon: SettingsIcon,
    children: "C&C DriverModel",
    selected: false,
    tooltipTitle: "C&C DriverModel",
  },
  {
    toUri: "/testspecification",
    Icon: AssignmentIcon,
    children: "Test Specification",
    selected: false,
    tooltipTitle: "Test Specification",
    disabled: true,
  },
  {
    toUri: "/testplan",
    Icon: AccessTimeIcon,
    children: "Test Plan",
    selected: false,
    tooltipTitle: "Test Plan",
    disabled: true,
  },
  {
    toUri: "/coverage",
    Icon: EqualizerIcon,
    children: "Test Result",
    selected: false,
    tooltipTitle: "Test Result",
    disabled: true,
  },
];

export const selectedNavigationItemList = [
  {
    toUri: "/scenario-library",
    Icon: ListIcon,
    children: "Scenario Library",
    selected: true,
    tooltipTitle: "",
  },
  {
    toUri: "/traffic-db",
    Icon: CommuteIcon,
    children: "Traffic Data",
    selected: false,
    tooltipTitle: "",
    disabled: true,
  },
  {
    toUri: "/drivermodel",
    Icon: SettingsIcon,
    children: "C&C DriverModel",
    selected: false,
    tooltipTitle: "",
  },
  {
    toUri: "/testspecification",
    Icon: AssignmentIcon,
    children: "Test Specification",
    selected: false,
    tooltipTitle: "",
    disabled: true,
  },
  {
    toUri: "/testplan",
    Icon: AccessTimeIcon,
    children: "Test Plan",
    selected: false,
    tooltipTitle: "",
    disabled: true,
  },
  {
    toUri: "/coverage",
    Icon: EqualizerIcon,
    children: "Test Result",
    selected: false,
    tooltipTitle: "",
    disabled: true,
  },
];

export const openedNavigationItemList: ItemProps[] = [
  {
    toUri: "/scenario-library",
    Icon: ListIcon,
    children: "Scenario Library",
    selected: false,
    tooltipTitle: "",
  },
  {
    toUri: "/traffic-db",
    Icon: CommuteIcon,
    children: "Traffic Data",
    selected: false,
    tooltipTitle: "",
    disabled: true,
  },
  {
    toUri: "/drivermodel",
    Icon: SettingsIcon,
    children: "C&C DriverModel",
    selected: false,
    tooltipTitle: "",
  },
  {
    toUri: "/testspecification",
    Icon: AssignmentIcon,
    children: "Test Specification",
    selected: false,
    tooltipTitle: "",
    disabled: true,
  },
  {
    toUri: "/testplan",
    Icon: AccessTimeIcon,
    children: "Test Plan",
    selected: false,
    tooltipTitle: "",
    disabled: true,
  },
  {
    toUri: "/coverage",
    Icon: EqualizerIcon,
    children: "Test Result",
    selected: false,
    tooltipTitle: "",
    disabled: true,
  },
];

/**
 * 共通事前処理
 */
const setUp = (pathName: string, params: Params) => {
  (useLocation as jest.Mock).mockReturnValue({
    pathname: pathName,
  });

  const renderResult = renderHook(() => {
    return useNavigation(params);
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

describe("Navigation Hooks", () => {
  it("unselected", () => {
    const { result } = setUp("/", { isNavigationOpend: false });
    expect(result.current.navigationItemList).toStrictEqual(
      defaultNavigationItemList
    );
  });
  it("scenario-library selected", () => {
    const { result } = setUp("/scenario-library", { isNavigationOpend: true });
    expect(result.current.navigationItemList).toStrictEqual(
      selectedNavigationItemList
    );
  });
  it("navigation opened", () => {
    const { result } = setUp("/", { isNavigationOpend: true });
    // navigationItemList
    expect(result.current.navigationItemList).toStrictEqual(
      openedNavigationItemList
    );
  });
});
