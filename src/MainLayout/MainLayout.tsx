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
import { useMainLayout } from "./MainLayout.hook";
import { MainLayoutView } from "./MainLayout.view";

/**
 * Props
 */
export interface Props {
}

/**
 * MainLayout Component
 */
export const MainLayout: React.FC<Props> = (): JSX.Element => {
  const viewProps = useMainLayout();
  return <MainLayoutView {...viewProps} />;
};
