// CalculateRepaymentSchedule.ts

import { CashFlowData } from "@/types/SimulationData";

/**
 * 月次返済計算結果の型
 */
export interface RepaymentSchedule {
    month: number;                // 経過月数
    monthlyRepayment: number;     // 月次返済額（元金＋利息）
    principalPaid: number;        // 元金返済額
    interestPaid: number;         // 利息返済額
    remainingLoanBalance: number; // 残りのローン残高
}

/**
 * ローン残高が 0 になるまでの月次返済額を計算する関数
 * @param data - ユーザーからの入力データ
 * @returns 月ごとの返済結果を格納した配列
 */
export const CalculateRepaymentSchedule = (
    data: CashFlowData
): RepaymentSchedule[] => {
    const annualRate = data.interestRate / 100;           // 年利率（小数）
    const monthlyRate = annualRate / 12;                  // 月利率
    const totalPayments = data.loanTerm * 12;             // 総返済回数（月数）
    let remainingLoanBalance = data.loanAmount * 10000;   // 初期ローン残高（円）

    const repaymentSchedule: RepaymentSchedule[] = []; // 返済スケジュールを格納する配列

    for (let month = 1; month <= totalPayments; month++) {
        if (remainingLoanBalance <= 0) {
            break;
        }

        // 分母を計算
        const denominator = 1 - Math.pow(1 + monthlyRate, -(totalPayments - month + 1));

        // 月次返済額を計算
        let monthlyRepayment = denominator !== 0
            ? (remainingLoanBalance * monthlyRate) / denominator
            : remainingLoanBalance;

        // 利息支払額を計算
        const interestPaid = remainingLoanBalance * monthlyRate;

        // 元金返済額を計算
        let principalPaid = monthlyRepayment - interestPaid;

        // 元金返済額が残高を超える場合、調整する
        if (principalPaid > remainingLoanBalance) {
            principalPaid = remainingLoanBalance;
            monthlyRepayment = principalPaid + interestPaid;
        }

        // 残りのローン残高を更新
        remainingLoanBalance -= principalPaid;

        // 返済結果を配列に追加
        repaymentSchedule.push({
            month,
            monthlyRepayment,
            principalPaid,
            interestPaid,
            remainingLoanBalance: remainingLoanBalance > 0 ? remainingLoanBalance : 0
        });
    }

    return repaymentSchedule;
};
