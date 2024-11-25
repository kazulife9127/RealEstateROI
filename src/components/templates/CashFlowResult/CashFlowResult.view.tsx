import React from 'react';
import {
    PaperStyled,
    TitleTypographyStyled,
    ResultTypographyStyled,
    Grid2Styled,
    NoteTypographyStyled,
} from "./CashFlowResult.style"
import { formatCurrency, formatPercentage } from '@/hooks/RoiSimulation/Formatting';

export type Props = {
    result: {
        monthlyRepayment: number;          // ①返済額（月額）
        annualRepayment: number;           // ②返済額（年額）
        totalRepayment: number;            // ③返済総額
        annualRentIncome: number;          // ④家賃収入（年額）
        totalExpenses: number;             // ⑤控除・諸経費（年額）
        annualExpenses: number;            // ⑥年間支出
        annualNetIncome: number;           // ⑦年間手取り
        surfaceYield: number;              // ⑧表面利回り
        effectiveYield: number;            // ⑨実質利回り
        repaymentAfterYield: number;       // ⑩返済後利回り
        investmentYield: number;           // ⑪投資利回り
    }
}

export const CashFlowResultView: React.FC<Props> = ({
    result
}) => {
    return (
        <PaperStyled>
            <TitleTypographyStyled variant='h6'>収支試算結果</TitleTypographyStyled>
            
            {/* ①返済額（月額） */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">①返済額（月額）</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatCurrency(result.monthlyRepayment)}円
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 6 }}>
                    <NoteTypographyStyled variant="body2">
                        ※毎月の返済額(利子なし)
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>

            {/* ②返済額（年額） */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">②返済額（年額）</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatCurrency(result.annualRepayment)}円
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 6 }}>
                    <NoteTypographyStyled variant="body2">
                        ※①返済額(月額) × 12ヶ月(利子なし)
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>

            {/* ③返済総額 */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">③返済総額</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatCurrency(result.totalRepayment)}円
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 6 }}>
                    <NoteTypographyStyled variant="body2">
                        ※②返済額(年額) × 借入期間(利子あり)
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>

            {/* ④家賃収入（年額） */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">④家賃収入（年額）</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatCurrency(result.annualRentIncome)}円
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 6 }}>
                    <NoteTypographyStyled variant="body2">
                        ※年間想定収入
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>            

            {/* ⑤控除・諸経費（年額） */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">⑤控除・諸経費（年額）</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatCurrency(result.totalExpenses)}円
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 6 }}>
                    <NoteTypographyStyled variant="body2">
                        ※④家賃収入(年額) × ( 空室率 ＋ 諸経費率 )
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>

            {/* ⑥年間支出 */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">⑥年間支出</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatCurrency(result.annualExpenses)}円
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 6 }}>
                    <NoteTypographyStyled variant="body2">
                        ※②返済額(年額) ＋ ⑤控除・諸経費(年額)
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>
            
            {/* ⑦年間手取り */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">⑦年間手取り</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatCurrency(result.annualNetIncome)}円
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 6 }}>
                    <NoteTypographyStyled variant="body2">
                        ※④家賃収入(年額) － ⑥年間支出
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>

            {/* ⑧表面利回り */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg:3 }}>
                    <ResultTypographyStyled variant="subtitle1">⑧表面利回り</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatPercentage(result.surfaceYield)}%
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 6 }}>
                    <NoteTypographyStyled variant="body2">
                        ※④家賃収入(年額) ÷ 物件価格
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>

            {/* ⑨実質利回り */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">⑨実質利回り</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatPercentage(result.effectiveYield)}%
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 6 }}>
                    <NoteTypographyStyled variant="body2">
                        ※(④家賃収入(年額) － ⑤控除・諸経費(年額)) ÷ 物件価格
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>

            {/* ⑩返済後利回り */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">⑩返済後利回り</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatPercentage(result.repaymentAfterYield)}%
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <NoteTypographyStyled variant="body2">
                        ※⑦年間手取り ÷ 物件価格
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>
            
            {/* ⑪投資利回り */}
            <Grid2Styled container alignItems="center" spacing={2}>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="subtitle1">⑪投資利回り</ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <ResultTypographyStyled variant="body2">
                        {formatPercentage(result.investmentYield)}%
                    </ResultTypographyStyled>
                </Grid2Styled>
                <Grid2Styled size={{ lg: 3 }}>
                    <NoteTypographyStyled variant="body2">
                        ※⑦年間手取り ÷ 自己資金
                    </NoteTypographyStyled>
                </Grid2Styled>
            </Grid2Styled>
        </PaperStyled>        
    );
};
