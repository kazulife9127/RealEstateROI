import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { MainTitleStyled } from '@/components/atoms/MainTitle';

export type Props = {}

export const SpreadsheetView: React.FC<Props> = () => {
  const columns: GridColDef[] = [
    { field: 'saveTimestanp',    headerName: 'タイムスタンプ',    width: 120 },
    { field: 'propertyName',     headerName: '物件名',            width: 150, editable: true },
    { field: 'address',          headerName: '住所',              width: 180, editable: true },
    { field: 'importance',       headerName: '重要度',            width: 120, editable: true },
    { field: 'monthlyRepayment', headerName: '返済額(月額)',      width: 130 },
    { field: 'annualRepayment',  headerName: '返済額(年額)',      width: 130 },
    { field: 'totalRepayment',   headerName: '返済総額',          width: 130 },
    { field: 'annualRentIncome', headerName: '家賃収入(年額)',    width: 150 },
    { field: 'totalExpenses',    headerName: '控除・諸経費',      width: 150 },
    { field: 'annualExpenses',   headerName: '年間支出',          width: 130 },
    { field: 'annualNetIncome',  headerName: '年間手取り',        width: 130 },
    { field: 'surfaceYield',     headerName: '表面利回り',        width: 120 },
    { field: 'effectiveYield',   headerName: '実質利回り',        width: 120 },
    { field: 'investmentYield',  headerName: '投資利回り',        width: 120 },
  ];

  const rows = [
    {
      id: 1,
      saveTimestanp:    '2025-01-20',
      propertyName:     '○○ビル',
      address:          '東京都新宿区...',
      importance:       '高',
      monthlyRepayment: 100000,
      annualRepayment:  1200000,
      totalRepayment:   3000000,
      annualRentIncome: 1500000,
      totalExpenses:    200000,
      annualExpenses:   100000,
      annualNetIncome:  1400000,
      surfaceYield:     5.2,
      effectiveYield:   4.8,
      investmentYield:  3.1,
    },
    {
      id: 2,
      saveTimestanp:    '2025-01-21',
      propertyName:     '△△マンション',
      address:          '大阪府大阪市...',
      importance:       '中',
      monthlyRepayment: 80000,
      annualRepayment:  960000,
      totalRepayment:   2500000,
      annualRentIncome: 1200000,
      totalExpenses:    150000,
      annualExpenses:   80000,
      annualNetIncome:  1120000,
      surfaceYield:     5.0,
      effectiveYield:   4.5,
      investmentYield:  2.9,
    },
  ];

  return (
    <>
      <MainTitleStyled variant='h2'>Spreadsheet</MainTitleStyled>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel={{ pageSize: rows.length, page: 0 }}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </>
  );
};
