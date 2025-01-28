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
import { RealEstateInputFormView } from "./RealEstateInputForm.view";
import { useRealEstateInputForm } from "./RealEstateInputForm.hook";
/**
 * Props
 */
export type Props = {
}

/**
 * RealEstateInputForm Component
 */
export const RealEstateInputForm: React.FC<Props> = (): JSX.Element => {
  const viewProps = useRealEstateInputForm();
  return <RealEstateInputFormView {...viewProps} />;
};
