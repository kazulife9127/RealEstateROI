// Formatting.ts

import { CashFlowInputData, CashFlowData } from "@/types/SimulationData.ts";

export const formatCurrency = (num: number, fractionDigits: number = 0): string => {
    return num.toLocaleString('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    });
};

export const formatPercentage = (num: number, fractionDigits: number = 2): string => {
    return num.toLocaleString('ja-JP', {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    });
};

export const toNumber = (value: number | ""): number => {
    return typeof value === 'number' ? value : 0;
}

export const convertInputToData = (input: CashFlowInputData): CashFlowData => ({
    propertyPrice: toNumber(input.propertyPrice),
    expectedAnnualIncome: toNumber(input.expectedAnnualIncome),
    vacancyRate: toNumber(input.vacancyRate),
    expenseRate: toNumber(input.expenseRate),
    ownCapital: toNumber(input.ownCapital),
    loanAmount: toNumber(input.loanAmount),
    loanTerm: toNumber(input.loanTerm),
    interestRate: toNumber(input.interestRate),
    repaymentMethod: input.repaymentMethod,
});
