// CalculateRepaymentResult.ts

import { CashFlowData, CalculatedResult, CashFlowInputUnit } from "@/types/SimulationData";
import {
    calculateAnnualRentIncome,
    calculateTotalExpenses,
    calculateSurfaceYield,
    calculateEffectiveYield,
    calculateAnnualExpenses,
    calculateAnnualNetIncome,
    calculateRepaymentAfterYield,
    calculateInvestmentYield,
    calculateEqualPrincipalAndInterestRepayment
} from './CalculationUtils';

/**
 * 返済結果を計算する関数
 * @param data - ユーザーからの入力データ
 * @returns 計算結果を含むオブジェクト
 */
export const CalculateRepaymentResult = (
    data: CashFlowData,
    expenseUnit: CashFlowInputUnit
): CalculatedResult => {
    // 家賃収入（年額）を計算
    const annualRentIncome = calculateAnnualRentIncome(data.expectedAnnualIncome);

    // 控除・諸経費（年額）を計算
    const totalExpenses = calculateTotalExpenses(annualRentIncome, data.vacancyRate, data.expenseRate, expenseUnit);
    
    // 物件価格（円）と自己資金（円）を計算
    const propertyPrice = data.propertyPrice * 10000;
    const ownCapital = data.ownCapital * 10000;

    // 表面利回りと実質利回りを計算
    const surfaceYield = calculateSurfaceYield(annualRentIncome, propertyPrice);
    const effectiveYield = calculateEffectiveYield(annualRentIncome, totalExpenses, propertyPrice);

    // 借入金額（円）と年利率を取得
    const loanAmount = data.loanAmount * 10000;
    const annualRate = data.interestRate / 100;

    // 返済額を格納する変数を初期化
    let monthlyRepayment = 0;      // 月次返済額
    let annualRepayment = 0;       // 年間返済額
    let totalRepayment = 0;        // 総返済額（元金＋利息）
    let principalPaidTotal = 0;    // 元金返済総額
    let interestPaidTotal = 0;     // 利息返済総額

    // 返済方法が「元利均等返済」の場合
    if (data.repaymentMethod === 'equalPrincipalAndInterest') {
        // 元利均等返済の計算を実行
        const repaymentResult = calculateEqualPrincipalAndInterestRepayment(
            loanAmount,
            annualRate,
            data.loanTerm
        );

        monthlyRepayment = repaymentResult.monthlyRepayment;
        annualRepayment = repaymentResult.annualRepayment;
        totalRepayment = repaymentResult.totalRepayment;
        principalPaidTotal = repaymentResult.principalPaidTotal;
        interestPaidTotal = repaymentResult.interestPaidTotal;
    }

    // 年間支出と年間手取りを計算
    const annualExpenses = calculateAnnualExpenses(annualRepayment, totalExpenses);
    const annualNetIncome = calculateAnnualNetIncome(annualRentIncome, annualExpenses);

    // 返済後利回りと投資利回りを計算
    const repaymentAfterYield = calculateRepaymentAfterYield(annualNetIncome, propertyPrice);
    const investmentYield = calculateInvestmentYield(annualNetIncome, ownCapital);

    // 計算結果を返す
    return {
        monthlyRepayment: parseFloat(monthlyRepayment.toFixed(2)),     // ①返済額（月額）
        annualRepayment: parseFloat(annualRepayment.toFixed(2)),       // ②返済額（年額）
        totalRepayment: parseFloat(totalRepayment.toFixed(2)),         // ③返済総額（累積）
        annualRentIncome,                                              // ④家賃収入（年額）
        totalExpenses,                                                 // ⑤控除・諸経費（年額）
        annualExpenses: parseFloat(annualExpenses.toFixed(2)),         // ⑥年間支出
        annualNetIncome: parseFloat(annualNetIncome.toFixed(2)),       // ⑦年間手取り
        surfaceYield,                                                  // ⑧表面利回り
        effectiveYield,                                                // ⑨実質利回り
        repaymentAfterYield,                                           // ⑩返済後利回り
        investmentYield,                                               // ⑪投資利回り
        principalPaid: parseFloat(principalPaidTotal.toFixed(2)),      // 元金返済総額
        interestPaid: parseFloat(interestPaidTotal.toFixed(2)),        // 利息返済総額
    };
};
