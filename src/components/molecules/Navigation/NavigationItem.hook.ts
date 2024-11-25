/**
 * node_modules
 */
import { type SvgIconComponent } from "@mui/icons-material";
/**
 * project modules
 */

/**
 * private modules
 */
import { type Props as ViewProps } from "./NavigationItem.view";

/**
 * Params
 * @package
 */
export interface Params {
  /**
   * 子要素
   */
  children?: React.ReactNode;
  /**
   * 遷移先
   */
  toUri: string;
  /**
   * アイコン
   */
  Icon: SvgIconComponent;
  /**
   * 選択中か
   */
  selected?: boolean;
  /**
   * 表示させるか？
   */
  isShow?: boolean | undefined;
  /**
   * 無効か？
   */
  disabled?: boolean | undefined;
  /**
   * Tooltipタイトル
   */
  tooltipTitle: NonNullable<React.ReactNode>;
}

/**
 * NavigationItem Hooks
 * @package
 */
export const useNavigationItem = ({
  children,
  toUri,
  Icon,
  isShow,
  disabled,
  tooltipTitle,
}: Params): ViewProps => {
  return {
    children,
    toUri,
    Icon,
    isShow,
    disabled,
    tooltipTitle,
  };
};
