// src/hooks/spreadsheet/useDeleteSpreadsheets.ts
import { useState } from 'react';
import { GridRowSelectionModel } from '@mui/x-data-grid';
import { fetchAuthSession } from 'aws-amplify/auth';

export const useDeleteSpreadsheets = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteSelectedSpreadsheets = async (
    selectedIds: GridRowSelectionModel,
    refetch: () => Promise<void>,
  ) => {
    if (selectedIds.length === 0) {
      alert('削除する行を選択してください!');
      return;
    }
    const confirmDelete = window.confirm(`選択した ${selectedIds.length} 件のデータを削除します。よろしいですか？`);
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      const session = await fetchAuthSession();
      const token = session?.tokens?.idToken?.toString();
      if (!token) throw new Error('認証トークンが取得できませんでした');

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

      const deletePromises = selectedIds.map(id =>
        fetch(`${apiUrl}/spreadsheet/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` },
        })
      );
      const responses = await Promise.all(deletePromises);

      const failedDeletes: (string | number)[] = [];
      responses.forEach((res, i) => {
        if (!res.ok) failedDeletes.push(selectedIds[i]);
      });

      if (failedDeletes.length > 0) {
        alert(`${failedDeletes.length} 件のデータの削除に失敗しました。`);
      } else {
        alert('選択したデータを削除しました。');
      }
      await refetch();
    } catch (error) {
      console.error('データ削除エラー:', error);
      alert('データの削除中にエラーが発生しました。');
    } finally {
      setIsDeleting(false);
    }
  };

  return { isDeleting, deleteSelectedSpreadsheets };
};
