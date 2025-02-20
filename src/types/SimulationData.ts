export type CashFlowInputData = {
    propertyPrice: number | '';
    expectedAnnualIncome: number | '';
    vacancyRate: number | '';
    expenseRate: number | '';
    ownCapital: number | '';
    loanAmount: number | '';
    loanTerm: number | '';
    interestRate: number | '';
    repaymentMethod: 'equalPrincipalAndInterest';
}
export type CashFlowInputUnit = 'percentage' | 'yen';

export type CashFlowData = {
    propertyPrice: number;         // 物件価格（万円）
    expectedAnnualIncome: number;  // 想定年収（万円）
    vacancyRate: number;           // 空室率（%）
    expenseRate: number;           // 諸経費率（%）
    ownCapital: number;            // 自己資金（万円）
    loanAmount: number;            // 借入額（万円）
    loanTerm: number;              // 借入期間（年）
    interestRate: number;          // 金利（%）
    repaymentMethod: 'equalPrincipalAndInterest';
}

export type CalculatedResult = {
    monthlyRepayment: number;          // ①返済額（月額）
    annualRepayment: number;           // ②返済額（年額）
    totalRepayment: number;            // ③返済総額（累積）
    annualRentIncome: number;          // ④家賃収入（年額）
    totalExpenses: number;             // ⑤控除・諸経費（年額）
    annualExpenses: number;            // ⑥年間支出
    annualNetIncome: number;           // ⑦年間手取り
    surfaceYield: number;              // ⑧表面利回り
    effectiveYield: number;            // ⑨実質利回り
    repaymentAfterYield: number;       // ⑩返済後利回り
    investmentYield: number;           // ⑪投資利回り
    principalPaid: number;             // 元金返済総額（追加）
    interestPaid: number;              // 利息返済総額（追加）
}

export type TimeSeriesData = {
    period: number;
    periodLabel: string;
    // 月次データ
    monthlyRentIncome?: number;
    monthlyRepayment?: number;
    monthlyNetIncome?: number;
    // 年次データ
    annualRentIncome?: number;
    annualRepayment?: number;
    annualNetIncome?: number;
    // 共通データ
    principalPaid: number;
    interestPaid: number;
    // 他の共通フィールドがあれば追加
};
