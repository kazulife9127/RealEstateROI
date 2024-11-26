// CashFlowGraph.view.tsx

import React from 'react';
import {
    PaperStyled,
    TitleTypographyStyled,
    NoteTypographyStyled,
    SliderStyled,
    MenuItemStyled,
    StackStyled,
    TextFieldStyled
} from "./CashFlowGraph.style"
import {
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { formatCurrency } from '@/hooks/RoiSimulation/Formatting';
import { CashFlowGraphProps } from '@/types/GraphData';

export const CashFlowGraphView: React.FC<CashFlowGraphProps> = ({
    data,
    selectedPeriod,
    selectedValue,
    handlePeriodChange,
    handleValueChange
}) => {
    // スライダーの最大値と最小値を設定
    const sliderProps = selectedPeriod === 'year'
        ? { min: 1, max: 100 } // 年の場合
        : { min: 1, max: 1200 }; // 月の場合

    // グラフの表示項目を期間に応じて設定
    const rentIncomeKey = selectedPeriod === 'year' ? 'annualRentIncome' : 'monthlyRentIncome';
    const netIncomeKey = selectedPeriod === 'year' ? 'annualNetIncome' : 'monthlyNetIncome';
    const periodLabel = selectedPeriod === 'year' ? '年' : '月';
    const netIncomeName = selectedPeriod === 'year' ? '年間手取り額' : '月の手取り額';
    const rentIncomeName = selectedPeriod === 'year' ? '年額家賃収入' : '月額家賃収入';

    return (
        <PaperStyled>
            <TitleTypographyStyled>収支試算グラフ</TitleTypographyStyled>
            <StackStyled direction="row" spacing={4} alignItems="center">
                {/* 期間選択用のTextField */}
                <TextFieldStyled
                    select
                    sx={{ minWidth: 150 }}
                    label="期間"
                    value={selectedPeriod}
                    onChange={(event) =>
                        handlePeriodChange(event.target.value as 'year' | 'month')}
                >
                    <MenuItemStyled value="year">年</MenuItemStyled>
                    <MenuItemStyled value="month">月</MenuItemStyled>
                </TextFieldStyled>

                {/* Sliderを表示 */}
                <SliderStyled
                    value={selectedValue}
                    onChange={(_event, value) => handleValueChange(value as number)}
                    valueLabelDisplay="auto"
                    {...sliderProps}
                />
            </StackStyled>

            {/* グラフの表示 */}
            <ResponsiveContainer width="100%" aspect={2}>
                <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="periodLabel" 
                        label={{ value: periodLabel, position: 'insideBottomRight', offset: 0 }} 
                    />
                    <YAxis 
                        label={{ value: '金額 (円)', angle: -90, position: 'insideLeft' }} 
                        tickFormatter={(value) => formatCurrency(value)}
                    />
                    <Tooltip 
                        content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                                const dataPoint = payload[0].payload;
                                const repaymentTotal = dataPoint.principalPaid + dataPoint.interestPaid;
                                return (
                                    <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
                                        <p>{`期間: ${label}`}</p>
                                        <p>{`${rentIncomeName}: ${formatCurrency(dataPoint[rentIncomeKey])}`}</p>
                                        <p>{`返済額: ${formatCurrency(repaymentTotal)}`}</p>
                                        <p>{`  - 元金返済額: ${formatCurrency(dataPoint.principalPaid)}`}</p>
                                        <p>{`  - 利息返済額: ${formatCurrency(dataPoint.interestPaid)}`}</p>
                                        <p>{`${netIncomeName}: ${formatCurrency(dataPoint[netIncomeKey])}`}</p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Legend verticalAlign="top" height={36}/>
                    {/* 元金と利息をスタックした棒グラフにする */}
                    <Bar dataKey="principalPaid" stackId="repayment" fill="#F08B97" name="元金返済額" />
                    <Bar dataKey="interestPaid" stackId="repayment" fill="#FB1C00" name="利息返済額" />
                    <Bar dataKey={rentIncomeKey} fill="#26C49F" name={rentIncomeName} />
                    <Line type="monotone" dataKey={netIncomeKey} stroke="#8884D8" name={netIncomeName} strokeWidth={2} />
                </ComposedChart>
            </ResponsiveContainer>

            <NoteTypographyStyled variant="body2">
            </NoteTypographyStyled>
        </PaperStyled>
    );
};
