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
import { CashFlowGraphView } from "./CashFlowGraph.view";
import { useCashFlowGraph } from "./CashFlowGraph.hook";
/**
 * Props
 */
export type Props = {
}

/**
 * MainLayout Component
 */
export const CashFlowGraph: React.FC<Props> = (): JSX.Element => {
  const viewProps = useCashFlowGraph();
  return <CashFlowGraphView {...viewProps} />;
};