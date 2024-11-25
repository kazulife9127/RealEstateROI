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
import { CashFlowResultView } from "./CashFlowResult.view";
import { useCashFlowResult } from "./CashFlowResult.hook";
/**
 * Props
 */
export type Props = {
}

/**
 * MainLayout Component
 */
export const CashFlowResult: React.FC<Props> = (): JSX.Element => {
  const viewProps = useCashFlowResult();
  return <CashFlowResultView result={viewProps} />;
};