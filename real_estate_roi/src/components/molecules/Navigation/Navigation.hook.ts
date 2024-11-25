/**
 * node_modules
 */
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import MoneyIcon from '@mui/icons-material/Money';
import MapIcon from '@mui/icons-material/Map';
import TableViewIcon from '@mui/icons-material/TableView';
/**
 * project modules
 */

/**
 * private modules
 */
import { type Props as ViewProps } from "./Navigation.view";
import { type Props as ItemProps } from "./NavigationItem";

/**
 * Paramas
 * @package
 */
export interface Params {
  /**
   * Navigation開閉
   */
  isNavigationOpend: boolean;
}

/**
 * Navigation Hooks
 * @package
 */
export const useNavigation = ({ isNavigationOpend }: Params): ViewProps => {
  const { pathname } = useLocation();

  const navigationItemList = useMemo((): ItemProps[] => {
    return [
      {
        toUri: "/roi-simulation",
        Icon: MoneyIcon,
        children: "ROI Simulation",
        selected: pathname.startsWith("/roi-simulation"),
        tooltipTitle: isNavigationOpend ? "" : "ROI Simulation",
      },
      {
        toUri: "/value-map",
        Icon: MapIcon,
        children: "Value Map",
        selected: pathname.startsWith("/value-map"),
        tooltipTitle: isNavigationOpend ? "" : "Value Map",
        disabled: true,
      },
      {
        toUri: "/spreadsheet",
        Icon: TableViewIcon,
        children: "Spreadsheet",
        selected: pathname.startsWith("/spreadsheet"),
        tooltipTitle: isNavigationOpend ? "" : "Spreadsheet",
      },
    ];
  }, [isNavigationOpend, pathname]);

  return {
    navigationItemList,
  };
};
