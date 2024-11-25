import React, { createContext, useState, ReactNode } from 'react';
import { CashFlowInputData } from "@/types/SimulationData.ts";

type CashFlowContextType = {
    data: CashFlowInputData;
    setData: React.Dispatch<React.SetStateAction<CashFlowInputData>>;
    resetData: () => void;
}

export const CashFlowContext = createContext<CashFlowContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
}

export const CashFlowProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = useState<CashFlowInputData>({
        propertyPrice: '',
        expectedAnnualIncome: '',
        vacancyRate: '',
        expenseRate: '',
        ownCapital: '',
        loanAmount: '',
        loanTerm: '',
        interestRate: '',
        repaymentMethod: 'equalPrincipalAndInterest', // 初期値を設定
    });

    const resetData = () => {
        setData({
            propertyPrice: '',
            expectedAnnualIncome: '',
            vacancyRate: '',
            expenseRate: '',
            ownCapital: '',
            loanAmount: '',
            loanTerm: '',
            interestRate: '',
            repaymentMethod: 'equalPrincipalAndInterest', // 初期値をリセット
        });
    };

    return (
        <CashFlowContext.Provider value={{ data, setData, resetData }}>
            {children}
        </CashFlowContext.Provider>
    )
}
