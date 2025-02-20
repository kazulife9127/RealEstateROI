import { useContext, useEffect } from 'react';
import { CashFlowContext } from '../CashFlowContext.tsx';
import { CashFlowInputData, CashFlowInputUnit } from '@/types/SimulationData.ts'

export const useCashFlowInputForm = () => {
    const context = useContext(CashFlowContext);
    if(!context){
        throw new Error();
    }

    const { data, setData, resetData, expenseUnit, setExpenseUnit } = context;

    // ★ localStorageのキー名を定義
    const LOCAL_STORAGE_KEY = 'cashFlowInputData';

    // ★ マウント時に localStorage から読み込み
    useEffect(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedData) {
            try {
                // 数値項目が文字列になるので、必要に応じて再変換する
                const parsed = JSON.parse(savedData) as CashFlowInputData;
                setData(parsed);
            } catch (error) {
                console.error('ローカルストレージのデータ解析に失敗しました', error);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ★ data が変化するたびに localStorage へ保存
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }, [data]);

    const handleChange = (field: keyof CashFlowInputData, value: number 
        | ''
        | 'equalPrincipalAndInterest') => {
        setData(prev => ({ ...prev, [field]: value }));
    }

    const handleReset = () => {
        resetData();
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

    // 諸経費の入力の単位を変更する
    const expenseRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const unit = event.target.value as CashFlowInputUnit;
        setExpenseUnit(unit);
    };


    return {
        data,
        handleChange,
        handleReset,
        expenseRateChange,
        expenseUnit
    }
    
}