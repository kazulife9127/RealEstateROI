// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoiSimulation } from "./components/pages/RoiSimulation";
import { Spreadsheet } from './components/pages/Spreadsheet';
import { MainLayout } from './MainLayout';
import { RequireAuth } from './hooks/Auth/RequireAuth'
import { AuthProvider } from './hooks/Auth/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<RoiSimulation />} />
            <Route path="/roi-simulation" element={<RoiSimulation />} />
            <Route
              path="/spreadsheet"
              element={
                <RequireAuth>
                  <Spreadsheet />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  );
};

export default App;
