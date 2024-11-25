// src/types/GraphData.ts

export type CashFlowGraphProps = {
    data: GraphDataItem[];
    selectedPeriod: Period;
    selectedValue: number;
    handlePeriodChange: (value: Period) => void;
    handleValueChange: (value: number) => void;
};

export type GraphDataItem = {
    periodLabel: string;
    principalPaid: number;
    interestPaid: number;
    // 年次データ
    annualRentIncome?: number | undefined;
    annualNetIncome?: number | undefined;
    // 月次データ
    monthlyRentIncome?: number | undefined;
    monthlyNetIncome?: number | undefined;
};

export type Period = 'year' | 'month';
