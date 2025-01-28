// src/hooks/spreadsheet/useFetchSpreadsheets.ts
import { useState, useEffect } from 'react';
import { SpreadsheetData } from '../Spreadsheet.view';
import { fetchAuthSession } from 'aws-amplify/auth';

export const useFetchSpreadsheets = () => {
  const [spreadsheetData, setSpreadsheetData] = useState<SpreadsheetData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const loadSpreadsheetData = async () => {
    setIsLoading(true);
    setFetchError(null);
    try {
      const session = await fetchAuthSession();
      const token = session?.tokens?.idToken?.toString();
      if (!token) throw new Error('認証トークンが取得できませんでした');

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
      const response = await fetch(`${apiUrl}/spreadsheet`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'データの取得に失敗しました');
      }
      const result: SpreadsheetData[] = await response.json();
      setSpreadsheetData(result);
    } catch (err: unknown) {
      setFetchError(err instanceof Error ? err.message : '不明なエラーが発生しました');
      console.error('データ取得エラー:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSpreadsheetData();
  }, []);

  return { spreadsheetData, isLoading, fetchError, loadSpreadsheetData };
};
