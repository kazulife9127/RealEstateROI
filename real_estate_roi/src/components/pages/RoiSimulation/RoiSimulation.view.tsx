import React from 'react';

import { CashFlowInputForm } from '@/components/templates/CashFlowInputForm';
import { CashFlowResult } from '@/components/templates/CashFlowResult';
import { CashFlowGraph } from '@/components/templates/CashFlowGraph';

import { MainTitleStyled } from '@/components/atoms/MainTitle';
import {
    GridStyled,
    LeftGridStyled,
    RightGridStyled,
    BoxStyled,
    UnderGridStyled
} from "./RoiSimulation.style";

export type Props = {
}

export const RoiSimulationView: React.FC<Props> = () => {
    return (
        <>
          <MainTitleStyled variant='h2'>ROI Simulation</MainTitleStyled>
          <BoxStyled sx={{ flexGrow: 1, padding: 2 }}>
            <GridStyled container spacing={2}>
              <LeftGridStyled size={{ lg: 6}}>
                <BoxStyled>
                  <CashFlowInputForm/>
               </BoxStyled> 
              </LeftGridStyled>
              <RightGridStyled size={{ lg: 6}}>
                <BoxStyled>
                    <CashFlowResult/>
                </BoxStyled>
              </RightGridStyled>
              <UnderGridStyled size={{ lg: 12}}>
                <BoxStyled>
                    <CashFlowGraph/>
                </BoxStyled>
              </UnderGridStyled>
            </GridStyled>
          </BoxStyled>
        </>
    )
};