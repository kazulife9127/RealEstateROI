// src/components/templates/Spreadsheet/Spreadsheet.hook.ts
import { useState, useEffect } from 'react';
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { Props as ViewProps, SpreadsheetData } from "./Spreadsheet.view";


export const useSpreadsheet = (): ViewProps => {
  const [data, setData] = useState<SpreadsheetData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // 現在の認証ユーザーを取得
      const { username } = await getCurrentUser();
      const session = await fetchAuthSession();
      const token = session?.tokens?.idToken?.toString();

      if (!token) {
        throw new Error('認証トークンが取得できませんでした');
      }

      // バックエンドAPIのURLを取得
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

      // GETリクエストでデータを取得
      const response = await fetch(`${apiUrl}/spreadsheet`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'データの取得に失敗しました');
      }

      const result: SpreadsheetData[] = await response.json();
      setData(result);
    } catch (err: unknown) {
      let message = 'データの取得中にエラーが発生しました';
      if (err instanceof Error) {
        message = err.message;
      }
      console.error('データ取得エラー:', err);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};
