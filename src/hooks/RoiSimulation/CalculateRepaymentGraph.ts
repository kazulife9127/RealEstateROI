// CalculateRepaymentGraph.ts

import { CashFlowData, TimeSeriesData, CashFlowInputUnit } from "@/types/SimulationData";
import { CalculateRepaymentSchedule, RepaymentSchedule } from './CalculateRepaymentSchedule';
import {
    calculateAnnualRentIncome,
    calculateMonthlyRentIncome,
    calculateTotalExpenses,
    calculateMonthlyExpenses,
    calculateAnnualExpenses,
    calculateMonthlyNetIncome,
    calculateAnnualNetIncome,
    // calculateInvestmentYield,
    // calculateInvestmentYieldMonthly
} from './CalculationUtils';

/**
 * グラフ用の返済計算を行う関数
 * @param data - ユーザーからの入力データ
 * @param maxPeriod - 最大期間（年数または月数）
 * @param periodType - 'year' または 'month'
 * @returns 期間ごとの計算結果を格納した配列
 */
export const CalculateRepaymentGraph = (
    data: CashFlowData,
    maxPeriod: number,
    periodType: 'year' | 'month',
    expenseUnit: CashFlowInputUnit
): TimeSeriesData[] => {
    // 家賃収入を計算
    const annualRentIncome = calculateAnnualRentIncome(data.expectedAnnualIncome);
    const monthlyRentIncome = calculateMonthlyRentIncome(data.expectedAnnualIncome);

    // 控除・諸経費を計算
    const totalAnnualExpenses = calculateTotalExpenses(annualRentIncome, data.vacancyRate, data.expenseRate, expenseUnit);
    const totalMonthlyExpenses = calculateMonthlyExpenses(monthlyRentIncome, data.vacancyRate, data.expenseRate, expenseUnit);

    // 物件価格（円）と自己資金（円）を計算
    // const propertyPrice = data.propertyPrice * 10000;
    // const ownCapital = data.ownCapital * 10000;

    // 月次返済スケジュールを取得
    const repaymentSchedule = CalculateRepaymentSchedule(data);

    const timeSeries: TimeSeriesData[] = []; // 結果を格納する配列

    // 累積返済額を初期化
    let cumulativeRepayment = 0;

    if (periodType === 'year') {
        // 年ごとの返済計算を行うループ
        for (let year = 1; year <= maxPeriod; year++) {
            // 該当年の月次返済データを抽出
            const monthlyDataOfYear: RepaymentSchedule[] = repaymentSchedule.filter(
                (item) => Math.ceil(item.month / 12) === year
            );

            // 年間返済額、元金返済額、利息返済額を計算
            const annualRepayment = monthlyDataOfYear.reduce((sum, item) => sum + item.monthlyRepayment, 0);
            const annualPrincipal = monthlyDataOfYear.reduce((sum, item) => sum + item.principalPaid, 0);
            const annualInterest = monthlyDataOfYear.reduce((sum, item) => sum + item.interestPaid, 0);

            // 累積返済額を更新
            cumulativeRepayment += annualRepayment;

            // 年間支出を計算
            const annualExpenses = calculateAnnualExpenses(annualRepayment, totalAnnualExpenses);

            // 年間手取りを計算
            const annualNetIncome = calculateAnnualNetIncome(annualRentIncome, annualExpenses);

            // 投資利回りを計算
            // const investmentYield = calculateInvestmentYield(annualNetIncome, ownCapital);

            // 結果を格納
            timeSeries.push({
                period: year,
                periodLabel: `${year}年目`,
                annualRentIncome,
                annualRepayment: parseFloat(annualRepayment.toFixed(2)),
                annualNetIncome: parseFloat(annualNetIncome.toFixed(2)),
                principalPaid: parseFloat(annualPrincipal.toFixed(2)),
                interestPaid: parseFloat(annualInterest.toFixed(2)),
                // 他に必要なデータがあれば追加
            });
        }
    } else {
        // 月ごとの返済計算を行うループ
        for (let month = 1; month <= maxPeriod; month++) {
            // 該当月の返済データを取得
            const repaymentData = repaymentSchedule.find(item => item.month === month) || {
                monthlyRepayment: 0,
                principalPaid: 0,
                interestPaid: 0,
            };

            // 月次返済額、元金返済額、利息返済額
            const monthlyRepayment = repaymentData.monthlyRepayment;
            const principalPaid = repaymentData.principalPaid;
            const interestPaid = repaymentData.interestPaid;

            // 累積返済額を更新
            cumulativeRepayment += monthlyRepayment;

            // 月間支出を計算
            const monthlyExpenses = monthlyRepayment + totalMonthlyExpenses;

            // 月間手取りを計算
            const monthlyNetIncome = calculateMonthlyNetIncome(monthlyRentIncome, monthlyExpenses);

            // 投資利回り（月次）を計算
            // const investmentYield = calculateInvestmentYieldMonthly(monthlyNetIncome, ownCapital);

            // 結果を格納
            timeSeries.push({
                period: month,
                periodLabel: `${month}ヶ月目`,
                monthlyRentIncome,
                monthlyRepayment: parseFloat(monthlyRepayment.toFixed(2)),
                monthlyNetIncome: parseFloat(monthlyNetIncome.toFixed(2)),
                principalPaid: parseFloat(principalPaid.toFixed(2)),
                interestPaid: parseFloat(interestPaid.toFixed(2)),
                // 他に必要なデータがあれば追加
            });
        }
    }

    return timeSeries;
};
