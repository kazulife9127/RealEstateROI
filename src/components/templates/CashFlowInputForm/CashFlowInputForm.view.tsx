import React from 'react';

import {
    PaperStyled,
    TypographyStyled,
    TextFieldStyled,
    InputAdornmentStyled,
    Grid2Styled,
    ButtonStyled,
    TitleTypographyStyled,
    MenuItemStyled,
    FormHelperTextStyled,
    
} from "./CashFlowInputForm.style";

export type Props = {
    data: {
        propertyPrice: number | '';
        expectedAnnualIncome: number | '';
        vacancyRate: number | '';
        expenseRate: number | '';
        ownCapital: number | '';
        loanAmount: number | '';
        loanTerm: number | '';
        interestRate: number | '';
        repaymentMethod: 'equalPrincipalAndInterest';
    };
    handleChange: (field: keyof Props['data'], value: number
        | ''
        | 'equalPrincipalAndInterest'
    ) => void;
    handleReset: () => void;
    //handleSimulation: () => void;
}

export const CashFlowInputFormView: React.FC<Props> = ({
    data,
    handleChange,
    handleReset,
    //handleSimulation
}) => {
    return (
        <>
            <PaperStyled>
                <TitleTypographyStyled>収支入力</TitleTypographyStyled>
                <TypographyStyled variant='h6'>物件情報</TypographyStyled>
                <Grid2Styled container alignItems="center" spacing={2}>
                    <Grid2Styled size={{ lg: 3 }}>
                        <TextFieldStyled
                            label="物件価格"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={data.propertyPrice}
                            onChange={(e) =>
                                handleChange('propertyPrice', e.target.value === '' ? '' : Number(e.target.value))}
                            slotProps={{
                                htmlInput: {
                                    min: 0
                                },
                                input: {
                                    endAdornment: <InputAdornmentStyled position="end">万円</InputAdornmentStyled>,
                                },
                            }}
                        />
                    </Grid2Styled>
                    <FormHelperTextStyled>※</FormHelperTextStyled>
                </Grid2Styled>

                <Grid2Styled container alignItems="center" spacing={2}>
                    <Grid2Styled size={{ lg: 3 }}>
                        <TextFieldStyled
                            label="満室時想定年収"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={data.expectedAnnualIncome}
                            onChange={(e) =>
                                handleChange('expectedAnnualIncome', e.target.value === '' ? '' : Number(e.target.value))}
                            slotProps={{
                                htmlInput: {
                                    min: 0
                                },
                                input: {
                                    endAdornment: <InputAdornmentStyled position="end">万円</InputAdornmentStyled>,
                                },
                            }}
                        />
                    </Grid2Styled>
                    <FormHelperTextStyled>※満室時の年間想定収入を入力</FormHelperTextStyled>
                </Grid2Styled>

                <Grid2Styled container alignItems="center" spacing={2}>
                    <Grid2Styled size={{ lg: 3 }}>
                        <TextFieldStyled
                            label="想定空室率"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={data.vacancyRate}
                            onChange={(e) =>
                                handleChange('vacancyRate', e.target.value === '' ? '' : Number(e.target.value))}
                            slotProps={{
                                htmlInput: {
                                    min: 0
                                },
                                input: {
                                    endAdornment: <InputAdornmentStyled position="end">%</InputAdornmentStyled>,
                                },
                            }}
                        />
                    </Grid2Styled>
                    <FormHelperTextStyled>※想定される空室の割合を入れます。10戸のアパートで常に1戸空くと10％</FormHelperTextStyled>
                </Grid2Styled>

                <Grid2Styled container alignItems="center" spacing={2}>
                    <Grid2Styled size={{ lg: 3 }}>
                        <TextFieldStyled
                            label="諸経費率"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={data.expenseRate}
                            onChange={(e) =>
                                handleChange('expenseRate', e.target.value === '' ? '' : Number(e.target.value))}
                            slotProps={{
                                htmlInput: {
                                    min: 0
                                },
                                input: {
                                    endAdornment: <InputAdornmentStyled position="end">%</InputAdornmentStyled>,
                                },
                            }}
                        />
                    </Grid2Styled>
                    {/* FormHelperText を右側に配置 */}
                    <Grid2Styled size={{ lg: 6 }}>
                        <FormHelperTextStyled>
                            ※諸経費の家賃収入に対する割合(通常10%～20%が目安)。固定資産税、賃貸管理費、建物管理費、修繕積立金等が諸経費となります
                        </FormHelperTextStyled>
                    </Grid2Styled>
                </Grid2Styled>

                <TypographyStyled variant='h6'>資金計画</TypographyStyled>
                <Grid2Styled container alignItems="center" spacing={2}>
                    <Grid2Styled size={{ lg: 3 }}>
                        <TextFieldStyled
                            label="自己資金"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={data.ownCapital}
                            onChange={(e) =>
                                handleChange('ownCapital', e.target.value === '' ? '' : Number(e.target.value))}
                            slotProps={{
                                htmlInput: {
                                    min: 0
                                },
                                input: {
                                    endAdornment: <InputAdornmentStyled position="end">万円</InputAdornmentStyled>,
                                },
                            }}
                        />
                    </Grid2Styled>
                    <FormHelperTextStyled>※1千万円なら1000と入力</FormHelperTextStyled>
                </Grid2Styled>

                <Grid2Styled container alignItems="center" spacing={2}>
                    <Grid2Styled size={{ lg: 3 }}>
                        <TextFieldStyled
                            label="借入金額"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={data.loanAmount}
                            onChange={(e) =>
                                handleChange('loanAmount', e.target.value === '' ? '' : Number(e.target.value))}
                            slotProps={{
                                htmlInput: {
                                    min: 0
                                },
                                input: {
                                    endAdornment: <InputAdornmentStyled position="end">万円</InputAdornmentStyled>,
                                },
                            }}
                        />
                    </Grid2Styled>
                    <FormHelperTextStyled>※1千万円なら1000と入力、50万円以上</FormHelperTextStyled>
                </Grid2Styled>

                <Grid2Styled container alignItems="center" spacing={2}>
                    <Grid2Styled size={{ lg: 3 }}>
                        <TextFieldStyled
                            select
                            sx={{ minWidth: 195 }}
                            label="返済方法"
                            variant="outlined"
                            margin="normal"
                            value={data.repaymentMethod}
                            onChange={(e) =>
                                handleChange('repaymentMethod', e.target.value as 'equalPrincipalAndInterest')}
                        >
                            <MenuItemStyled value="equalPrincipalAndInterest">元利均等返済</MenuItemStyled>
                        </TextFieldStyled>
                    </Grid2Styled>
                    <FormHelperTextStyled>※返済方法を選択してください。</FormHelperTextStyled>
                </Grid2Styled>

                <Grid2Styled container alignItems="center" spacing={2}>
                    <Grid2Styled size={{ lg: 3 }}>
                        <TextFieldStyled
                            sx={{ minWidth: 195 }}
                            label="借入期間"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={data.loanTerm}
                            onChange={(e) =>
                                handleChange('loanTerm', e.target.value === '' ? '' : Number(e.target.value))}
                            slotProps={{
                                htmlInput: {
                                    min: 3,
                                    max: 35
                                },
                                input: {
                                    endAdornment: <InputAdornmentStyled position="end">年間</InputAdornmentStyled>,
                                },
                            }}
                        />
                    </Grid2Styled>
                    <FormHelperTextStyled>※借入期間は3年～35年まで入力</FormHelperTextStyled>
                </Grid2Styled>

                <Grid2Styled container alignItems="center" spacing={2}>
                    <Grid2Styled size={{ lg: 3 }}>
                        <TextFieldStyled
                            label="借入金利"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={data.interestRate}
                            onChange={(e) =>
                                handleChange('interestRate', e.target.value === '' ? '' : Number(e.target.value))}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornmentStyled position="start">
                                            年利
                                        </InputAdornmentStyled>
                                    ),
                                    endAdornment: (
                                        <InputAdornmentStyled position="end">
                                            %
                                        </InputAdornmentStyled>
                                    ),
                                },
                            }}
                        />
                    </Grid2Styled>
                    <FormHelperTextStyled>※年利2.15%なら、2.15と入力</FormHelperTextStyled>
                </Grid2Styled>

                <Grid2Styled container justifyContent="flex-end" spacing={2}>
                    <Grid2Styled>
                        <ButtonStyled variant="contained" color="secondary" onClick={handleReset}>
                            リセット
                        </ButtonStyled>
                    </Grid2Styled>
                </Grid2Styled>
            </PaperStyled>
        </>
    );
};
