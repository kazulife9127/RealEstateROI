import { CashFlowInputUnit } from "@/types/SimulationData";

/**
 * 家賃収入（年額）を計算する関数
 * @param expectedAnnualIncome - 想定年収（万円単位）
 * @returns 家賃収入（円）
 */
export const calculateAnnualRentIncome = (expectedAnnualIncome: number): number => {
    return expectedAnnualIncome * 10000;
};

/**
 * 控除・諸経費（年額）を計算する関数
 * @param annualRentIncome -> 家賃収入（円）
 * @param vacancyRate -> 空室率（%）
 * @param expenseRate -> 諸経費率（%）
 * @param expenseUnit 諸経費の単位。'percentage'なら%として計算、'yen'なら円として計算
 * @returns 総諸経費（円）
 */
export const calculateTotalExpenses = (
    annualRentIncome: number,
    vacancyRate: number,
    expenseRate: number,
    expenseUnit: CashFlowInputUnit
): number => {
    if (expenseUnit === 'yen') {
        // yenの場合：家賃収入×空室率/100 ＋ 入力された諸経費（円）
        return (annualRentIncome * vacancyRate) / 100 + expenseRate * 10000;
    } else {
        // percentageの場合：家賃収入×(空室率＋諸経費率)/100
        const totalExpensesRate = vacancyRate + expenseRate;
        return annualRentIncome * totalExpensesRate / 100;
    }
    
};

/**
 * 表面利回りを計算する関数
 * @param annualRentIncome -> 家賃収入（円）
 * @param propertyPrice -> 物件価格（円）
 * @returns 表面利回り（%）
 */
export const calculateSurfaceYield = (
    annualRentIncome: number,
    propertyPrice: number
): number => {
    return (annualRentIncome / propertyPrice) * 100;
};

/**
 * 実質利回りを計算する関数
 * @param annualRentIncome -> 家賃収入（円）
 * @param totalExpenses -> 総諸経費（円）
 * @param propertyPrice -> 物件価格（円）
 * @returns 実質利回り（%）
 */
export const calculateEffectiveYield = (
    annualRentIncome: number,
    totalExpenses: number,
    propertyPrice: number
): number => {
    return ((annualRentIncome - totalExpenses) / propertyPrice) * 100;
};

/**
 * 年間支出を計算する関数
 * @param annualRepayment -> 年間返済額（円）
 * @param totalExpenses -> 総諸経費（円）
 * @returns 年間支出（円）
 */
export const calculateAnnualExpenses = (
    annualRepayment: number,
    totalExpenses: number
): number => {
    return annualRepayment + totalExpenses;
};

/**
 * 年間手取りを計算する関数
 * @param annualRentIncome -> 家賃収入（円）
 * @param annualExpenses -> 年間支出（円）
 * @returns 年間手取り（円）
 */
export const calculateAnnualNetIncome = (
    annualRentIncome: number,
    annualExpenses: number
): number => {
    return annualRentIncome - annualExpenses;
};

/**
 * 返済後利回りを計算する関数
 * @param annualNetIncome -> 年間手取り（円）
 * @param propertyPrice -> 物件価格（円）
 * @returns 返済後利回り（%）
 */
export const calculateRepaymentAfterYield = (
    annualNetIncome: number,
    propertyPrice: number
): number => {
    return (annualNetIncome / propertyPrice) * 100;
};

/**
 * 投資利回りを計算する関数
 * @param annualNetIncome -> 年間手取り（円）
 * @param ownCapital -> 自己資金（円）
 * @returns 投資利回り（%）
 */
export const calculateInvestmentYield = (
    annualNetIncome: number,
    ownCapital: number
): number => {
    return (annualNetIncome / ownCapital) * 100;
};

/**
 * 元利均等返済方式の返済額を計算する関数
 * @param loanAmount -> 借入額（円）
 * @param annualRate -> 年利率（小数）
 * @param loanTerm -> 借入期間（年）
 * @returns 月次返済額、年間返済額、総返済額、元金返済総額、利息返済総額を含むオブジェクト
 */
export const calculateEqualPrincipalAndInterestRepayment = (
    loanAmount: number,
    annualRate: number,
    loanTerm: number
): {
    monthlyRepayment: number;
    annualRepayment: number;
    totalRepayment: number;
    principalPaidTotal: number;
    interestPaidTotal: number;
} => {
    const totalPaymentsInMonths = loanTerm * 12;     // 総返済回数（月数）
    const monthlyRate = annualRate / 12;             // 月利

    // 分母を計算
    const denominator = 1 - Math.pow(1 + monthlyRate, -totalPaymentsInMonths);

    // 月次返済額を計算
    const fixedMonthlyRepayment = denominator !== 0
        ? (loanAmount * monthlyRate) / denominator
        : 0;

    const annualRepayment = fixedMonthlyRepayment * 12;        // 年間返済額
    const totalRepayment = annualRepayment * loanTerm;         // 総返済額
    const totalInterest = totalRepayment - loanAmount;         // 利息総額

    return {
        monthlyRepayment: fixedMonthlyRepayment,   // 月次返済額
        annualRepayment,                           // 年間返済額
        totalRepayment,                            // 総返済額
        principalPaidTotal: loanAmount,            // 元金返済総額
        interestPaidTotal: totalInterest,          // 利息返済総額
    };
};

/**
 * 月額家賃収入を計算する関数
 * @param expectedAnnualIncome -> 想定年収（万円単位）
 * @returns 月額家賃収入（円）
 */
export const calculateMonthlyRentIncome = (expectedAnnualIncome: number): number => {
    return (expectedAnnualIncome * 10000) / 12;
};

/**
 * 月額控除・諸経費を計算する関数
 * @param monthlyRentIncome -> 月額家賃収入（円）
 * @param vacancyRate -> 空室率（%）
 * @param expenseRate -> 諸経費率（%）
 * @param expenseUnit 諸経費の単位。'percentage'なら%として計算、'yen'なら円として計算
 * @returns 月額諸経費（円）
 */
export const calculateMonthlyExpenses = (
    monthlyRentIncome: number,
    vacancyRate: number,
    expenseRate: number,
    expenseUnit: CashFlowInputUnit
): number => {
    if (expenseUnit === 'yen') {
        // 円の場合：家賃収入×空室率/100 ＋ 入力された諸経費（円）
        return (monthlyRentIncome * vacancyRate) / 100 + (expenseRate * 10000) / 12;
    } else {
        // percentageの場合：家賃収入×(空室率＋諸経費率)/100
        const totalExpensesRate = vacancyRate + expenseRate;
        return monthlyRentIncome * totalExpensesRate / 100;
    }
};

/**
 * 月間手取りを計算する関数
 * @param monthlyRentIncome -> 月額家賃収入（円）
 * @param monthlyExpenses -> 月間支出（円）
 * @returns 月間手取り（円）
 */
export const calculateMonthlyNetIncome = (
    monthlyRentIncome: number,
    monthlyExpenses: number
): number => {
    return monthlyRentIncome - monthlyExpenses;
};

/**
 * 投資利回り（月次）を計算する関数
 * @param monthlyNetIncome -> 月間手取り（円）
 * @param ownCapital -> 自己資金（円）
 * @returns 投資利回り（%）
 */
export const calculateInvestmentYieldMonthly = (
    monthlyNetIncome: number,
    ownCapital: number
): number => {
    return ((monthlyNetIncome * 12) / ownCapital) * 100;
};
