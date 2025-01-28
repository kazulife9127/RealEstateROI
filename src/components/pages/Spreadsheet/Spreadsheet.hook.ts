// src/hooks/spreadsheet/useSpreadsheet.ts
import { useState } from 'react';
import { useFetchSpreadsheets } from './hooks/useFetchSpreadsheets';
import { useDeleteSpreadsheets } from './hooks/useDeleteSpreadsheets';
import { GridRowSelectionModel } from '@mui/x-data-grid';
import { Props as ViewProps } from './Spreadsheet.view';

export const useSpreadsheet = (): ViewProps => {
  const { spreadsheetData, isLoading, fetchError, loadSpreadsheetData } = useFetchSpreadsheets();
  const { isDeleting, deleteSelectedSpreadsheets } = useDeleteSpreadsheets();
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

  const handleDelete = async () => {
    await deleteSelectedSpreadsheets(rowSelectionModel, loadSpreadsheetData);
    setRowSelectionModel([]);
  };

  return {
    data: spreadsheetData,
    loading: isLoading,
    error: fetchError,
    refetch: loadSpreadsheetData,
    rowSelectionModel,
    setRowSelectionModel,
    handleDelete,
    deleting: isDeleting,
  };
};
