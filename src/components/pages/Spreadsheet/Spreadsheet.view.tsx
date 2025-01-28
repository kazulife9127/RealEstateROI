// src/components/templates/Spreadsheet/Spreadsheet.view.tsx
import React, { useState } from 'react';
import { DataGrid, GridColDef, GridPaginationModel, GridRowSelectionModel } from '@mui/x-data-grid';
import { MainTitleStyled } from '@/components/atoms/MainTitle';
import { formatCurrency, formatPercentage } from '@/hooks/RoiSimulation/Formatting';

import {
  Grid2Styled,
  ButtonStyled,
} from "./Spreadsheet.style";

export interface SpreadsheetData {
  _id: string;
  propertyName: string;
  address: string;
  importance: string;
  monthlyRepayment: number;
  annualRepayment: number;
  totalRepayment: number;
  annualRentIncome: number;
  totalExpenses: number;
  annualExpenses: number;
  annualNetIncome: number;
  surfaceYield: number;
  effectiveYield: number;
  repaymentAfterYield: number;
  investmentYield: number;
  createdAt: string;
  updatedAt: string;
}

export interface Props {
  data: SpreadsheetData[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  rowSelectionModel: GridRowSelectionModel; 
  setRowSelectionModel: (selection: GridRowSelectionModel) => void; 
  handleDelete: () => Promise<void>;
  deleting: boolean;
}

export const SpreadsheetView: React.FC<Props> = ({
  data,
  loading,
  error,
  refetch,
  rowSelectionModel, 
  setRowSelectionModel, 
  handleDelete,
  deleting,
}) => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });

  const columns: GridColDef[] = [
    { field: 'createdAt', headerName: '作成日', width: 90 },
    { field: 'propertyName', headerName: '物件名', width: 250, editable: true },
    { field: 'address', headerName: '住所', width: 180, editable: true },
    { field: 'importance', headerName: '重要度', width: 70, editable: true },
    { field: 'monthlyRepayment', headerName: '返済額（月額）', width: 130 },
    { field: 'annualRepayment', headerName: '返済額（年額）', width: 130 },
    { field: 'totalRepayment', headerName: '返済総額', width: 130 },
    { field: 'annualRentIncome', headerName: '家賃収入（年額）', width: 150 },
    { field: 'totalExpenses', headerName: '控除・諸経費（年額）', width: 150 },
    { field: 'annualExpenses', headerName: '年間支出', width: 130 },
    { field: 'annualNetIncome', headerName: '年間手取り', width: 130 },
    { field: 'surfaceYield', headerName: '表面利回り', width: 120 },
    { field: 'effectiveYield', headerName: '実質利回り', width: 120 },
    { field: 'repaymentAfterYield', headerName: '返済後利回り', width: 150 },
    { field: 'investmentYield', headerName: '投資利回り', width: 120 },
  ];

  const rows = data.map((item: SpreadsheetData) => ({
    id: item._id,
    createdAt: new Date(item.createdAt).toLocaleDateString(),
    propertyName: item.propertyName,
    address: item.address,
    importance: item.importance,
    monthlyRepayment: `${formatCurrency(item.monthlyRepayment)}`,
    annualRepayment: `${formatCurrency(item.annualRepayment)}`,
    totalRepayment: `${formatCurrency(item.totalRepayment)}`,
    annualRentIncome: `${formatCurrency(item.annualRentIncome)}`,
    totalExpenses: `${formatCurrency(item.totalExpenses)}`,
    annualExpenses: `${formatCurrency(item.annualExpenses)}`,
    annualNetIncome: `${formatCurrency(item.annualNetIncome)}`,
    surfaceYield: `${formatPercentage(item.surfaceYield)}%`,
    effectiveYield: `${formatPercentage(item.effectiveYield)}%`,
    repaymentAfterYield: `${formatPercentage(item.repaymentAfterYield)}%`,
    investmentYield: `${formatPercentage(item.investmentYield)}%`,
  }));

  return (
    <>
      <MainTitleStyled variant='h2'>Spreadsheet</MainTitleStyled>
      {/* データを再取得するボタン（オプション） */}
      <Grid2Styled container justifyContent="flex-end" spacing={2}>
        <Grid2Styled>
          <ButtonStyled variant="contained" color="primary" onClick={refetch} disabled={loading}>
            更新
          </ButtonStyled>
        </Grid2Styled>
        <Grid2Styled>
          <ButtonStyled
            variant="contained"
            color="secondary"
            onClick={handleDelete}
            disabled={deleting || rowSelectionModel.length === 0}
          >
            {deleting ? '削除中...' : '選択したデータを削除'}
          </ButtonStyled>
        </Grid2Styled>
      </Grid2Styled>

      {loading && <div>読み込み中...</div>}
      {error && <div style={{ color: 'red' }}>エラー: {error}</div>}

      {!loading && !error && (
        <div style={{ height: 600, width: '100%', marginTop: '20px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[10, 20, 50]}
            checkboxSelection
            disableRowSelectionOnClick
            rowSelectionModel={rowSelectionModel} 
            onRowSelectionModelChange={(newSelection) => {
              setRowSelectionModel(newSelection);
            }}
          />
        </div>
      )}
    </>
  );
};
