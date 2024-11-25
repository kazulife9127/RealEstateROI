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
import { RoiSimulationView } from "./RoiSimulation.view";
import { useRoiSimulation } from "./RoiSimulation.hook";
import { CashFlowProvider } from "@/components/templates/CashFlowContext";
/**
 * Props
 */
export type Props = {
}

/**
 * MainLayout Component
 */
export const RoiSimulation: React.FC<Props> = (): JSX.Element => {
  const viewProps = useRoiSimulation();
  return (
    <CashFlowProvider>
      <RoiSimulationView {...viewProps} />;
    </CashFlowProvider>
  )
};
