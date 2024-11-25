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
import { CashFlowInputFormView } from "./CashFlowInputForm.view";
import { useCashFlowInputForm } from "./CashFlowInputForm.hook";
/**
 * Props
 */
export type Props = {
  
}

/**
 * MainLayout Component
 */
export const CashFlowInputForm: React.FC<Props> = (): JSX.Element => {
  const viewProps = useCashFlowInputForm();
  return <CashFlowInputFormView {...viewProps} />;
};
