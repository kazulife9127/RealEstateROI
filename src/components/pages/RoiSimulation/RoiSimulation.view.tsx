import React from 'react';

import { CashFlowInputForm } from '@/components/templates/CashFlowInputForm';
import { CashFlowResult } from '@/components/templates/CashFlowResult';
import { CashFlowGraph } from '@/components/templates/CashFlowGraph';
import { RealEstateInputForm } from '@/components/templates/RealEstateInputForm';
import { MainTitleStyled } from '@/components/atoms/MainTitle';
import {
  GridStyled,
  LeftGridStyled,
  RightGridStyled,
  BoxStyled,
  UnderGridStyled,
  SubTitleStyled
} from "./RoiSimulation.style";

export type Props = {
}

export const RoiSimulationView: React.FC<Props> = () => {
    return (
        <>
          <MainTitleStyled variant='h2'>ROI Simulation</MainTitleStyled>
          <SubTitleStyled variant='h3'>不動産投資のシュミレーション・グラフ表示ができます。</SubTitleStyled>
          <BoxStyled sx={{ flexGrow: 1, padding: 2 }}>
            <GridStyled container spacing={2}>
              <LeftGridStyled size={{ xs: 12, sm: 12, md: 6}}>
                <BoxStyled>
                  <CashFlowInputForm/>
               </BoxStyled> 
              </LeftGridStyled>
              <RightGridStyled size={{ xs: 12, sm: 12, md: 6}}>
                <BoxStyled>
                    <CashFlowResult/>
                </BoxStyled>
              </RightGridStyled>
              <UnderGridStyled size={{ xs: 12}}>
                <BoxStyled>
                    <CashFlowGraph/>
                </BoxStyled>
              </UnderGridStyled>
              <UnderGridStyled size={{ xs: 12}}>
                <BoxStyled>
                    <RealEstateInputForm/>
                </BoxStyled>
              </UnderGridStyled>
            </GridStyled>
          </BoxStyled>
        </>
    )
};
