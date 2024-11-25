// useCashFlowGraph.ts

import { useContext, useMemo, useState } from 'react';
import { CashFlowContext } from '../CashFlowContext.tsx';
import { CalculateRepaymentGraph } from '@/hooks/RoiSimulation/CalculateRepaymentGraph.ts';
import { convertInputToData } from "@/hooks/RoiSimulation/Formatting.ts";
import { CashFlowData, TimeSeriesData } from '@/types/SimulationData.ts';
import { CashFlowGraphProps, Period } from '@/types/GraphData.ts';

export const useCashFlowGraph = (): CashFlowGraphProps => {
    const context = useContext(CashFlowContext);
    if (!context) {
        throw new Error("CashFlowContext が見つかりません");
    }

    const { data } = context;

    const [selectedPeriod, setSelectedPeriod] = useState<Period>('year');
    const [selectedValue, setSelectedValue] = useState<number>(selectedPeriod === 'year' ? 35 : 420); // 初期値を設定

    // ハンドラーの定義
    const handlePeriodChange = (value: Period) => {
        setSelectedPeriod(value);
        if (value === 'year') {
            setSelectedValue(35); // デフォルト値を35年に設定
        } else if (value === 'month') {
            setSelectedValue(420); // デフォルト値を420ヶ月（35年）に設定
        }
    };

    const handleValueChange = (value: number) => {
        setSelectedValue(value);
    };

    // グラフデータの生成
    const graphData = useMemo<CashFlowGraphProps['data']>(() => {
        const fieldsFilled = Object.values(data).every(value => value !== '');
        if (!fieldsFilled) {
            return [];
        }

        const cashFlowData: CashFlowData = convertInputToData(data);
        const maxPeriod = selectedValue;

        // グラフ用の返済計算を実行
        const timeSeriesData: TimeSeriesData[] = CalculateRepaymentGraph(cashFlowData, maxPeriod, selectedPeriod);

        // 詳細データをグラフに渡す
        return timeSeriesData.map(item => ({
            periodLabel: item.periodLabel,
            monthlyRentIncome: item.monthlyRentIncome,
            monthlyRepayment: item.monthlyRepayment,
            monthlyNetIncome: item.monthlyNetIncome,
            annualRentIncome: item.annualRentIncome,
            annualNetIncome: item.annualNetIncome,
            principalPaid: item.principalPaid,
            interestPaid: item.interestPaid,
        }));
    }, [data, selectedPeriod, selectedValue]);

    return {
        data: graphData,
        selectedPeriod,
        selectedValue,
        handlePeriodChange,
        handleValueChange,
    };
};
