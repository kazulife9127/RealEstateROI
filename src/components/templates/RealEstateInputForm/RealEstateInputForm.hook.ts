// src/hooks/RealEstateInputForm.hook.ts
import { useState, useEffect } from 'react';
import { fetchAuthSession } from "aws-amplify/auth";
import { useCashFlowResult } from '@/components/templates/CashFlowResult/CashFlowResult.hook';
import { CalculatedResult } from "@/types/SimulationData";
import { FormData , Props as ViewProps} from "./RealEstateInputForm.view";

export const useRealEstateInputForm = (): ViewProps => {
    const initialFormData: FormData = {
        propertyName: '',
        prefecture: '',
        city: '',
        addressLine: '',
        buildingInfo: '',
        importance: '',
    };

    // フォームデータの状態管理
    const [formData, setFormData] = useState<FormData>(initialFormData);

    // ローディング状態とエラー状態の管理
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // ★ localStorageのキー名を定義
    const LOCAL_STORAGE_KEY = 'realEstateInputData';

    // ★ マウント時に localStorage から読み込む
    useEffect(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved) as FormData;
                setFormData(parsed);
            } catch (err) {
                console.error('ローカルストレージのデータ解析に失敗しました', err);
            }
        }
    }, []);

    // ★ formData が変化するたびに localStorage へ保存
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    }, [formData]);


    // useCashFlowResultフックからresultを取得
    const result: CalculatedResult = useCashFlowResult();

    // 入力変更ハンドラー
    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        // イベントターゲットがHTMLSelectElementの場合も考慮
        const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        const { name, value } = target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // データ保存ハンドラー
    const handleSave = async () => {
        setLoading(true);
        setError(null);

        try {
            // 現在の認証ユーザーを取得
            //const { username } = await getCurrentUser();
            const session = await fetchAuthSession();
            const token = session?.tokens?.idToken?.toString();

            // フォームデータとCashFlowResultを統合
            const payload = {
                //username,
                propertyName: formData.propertyName,
                address: `${formData.prefecture}${formData.city}${formData.addressLine}${formData.buildingInfo}`,
                importance: formData.importance,
                monthlyRepayment: result.monthlyRepayment,
                annualRepayment: result.annualRepayment,
                totalRepayment: result.totalRepayment,
                annualRentIncome: result.annualRentIncome,
                totalExpenses: result.totalExpenses,
                annualExpenses: result.annualExpenses,
                annualNetIncome: result.annualNetIncome,
                surfaceYield: result.surfaceYield,
                effectiveYield: result.effectiveYield,
                repaymentAfterYield: result.repaymentAfterYield,
                investmentYield: result.investmentYield
            };

            // バックエンドAPIエンドポイントのURLを環境変数から取得
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

            // データをバックエンドに送信
            const response = await fetch(`${apiUrl}/spreadsheet`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'データの保存に失敗しました');
            }

            // 成功時の処理（例: フォームのリセット、通知の表示）
            alert('データが保存されました！');

        } catch (err: unknown) {
            let message = 'データの保存中にエラーが発生しました';
            if (err instanceof Error) {
                message = err.message;
            }
            console.error('データ保存エラー:', err);
            setError(message);
            alert(`エラー: ${message}`);
        } finally {
            setLoading(false);
        }
    };

    // フォームリセットハンドラー
    const handleReset = () => {
        setFormData(initialFormData);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    };

    return {
        formData,
        handleChange,
        handleSave,
        handleReset,
        loading,
        error,
    };
};
