/**
 * node_modules
 */
import React from "react";
/**
 * project modules
 */

/**
 * private modules
 */
import { SpreadsheetView } from "./Spreadsheet.view";
import { useSpreadsheet } from "./Spreadsheet.hook";
/**
 * Props
 */
export type Props = {
}

/**
 * Spreadsheet Component
 */
export const Spreadsheet: React.FC<Props> = (): JSX.Element => {
  const viewProps = useSpreadsheet();
  return <SpreadsheetView {...viewProps} />;
};
