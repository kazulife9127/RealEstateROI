// src/hooks/RoiSimulation/useCashFlowResult.ts

import { useContext, useMemo } from "react";
import { CashFlowContext } from "../CashFlowContext.tsx";
import { CalculateRepaymentResult } from "@/hooks/RoiSimulation/CalculateRepaymentResult.ts";
import { CalculatedResult, CashFlowData } from "@/types/SimulationData.ts";
import { convertInputToData } from "@/hooks/RoiSimulation/Formatting.ts";

export const useCashFlowResult = (
): CalculatedResult => {
    const context = useContext(CashFlowContext);
    if (!context) {
        throw new Error("CashFlowContext が見つかりません");
    }

    const { data, expenseUnit } = context;

    const result = useMemo<CalculatedResult>(() => {
        const fieldsFilled = Object.values(data).every(value => value !== '');
        if (!fieldsFilled) {
            return {
                monthlyRepayment: 0,
                annualRepayment: 0,
                totalRepayment: 0,
                annualRentIncome: 0,
                totalExpenses: 0,
                annualExpenses: 0,
                annualNetIncome: 0,
                surfaceYield: 0,
                effectiveYield: 0,
                repaymentAfterYield: 0,
                investmentYield: 0,
                principalPaid: 0,
                interestPaid: 0,
            };
        }
        const cashFlowData: CashFlowData = convertInputToData(data);

        return CalculateRepaymentResult(cashFlowData, expenseUnit); // 残高を初期化
    }, [data, expenseUnit]);

    return result;
}
