import React from 'react';

import { CashFlowInputForm } from '@/components/templates/CashFlowInputForm';
import { CashFlowResult } from '@/components/templates/CashFlowResult';
import { CashFlowGraph } from '@/components/templates/CashFlowGraph';
import { RealEstateInputForm } from '@/components/templates/RealEstateInputForm';
import VisuallyHidden from '@/components/atoms/VisuallyHidden';
import {
  GridStyled,
  LeftGridStyled,
  RightGridStyled,
  BoxStyled,
  UnderGridStyled,
  SubTitleStyled,
  FeatureListStyled,
  FeatureListItemStyled
} from "./RoiSimulation.style";

export type Props = {}

/**
 * 不動産投資収支シミュレーションページ
 *
 * このツールは、物件の収支データを入力すると、リアルタイムにシミュレーション結果が表示され、
 * 年間・月間ごとの収支グラフで視覚的に投資効果を確認できます。また、シミュレーション結果と物件情報を連携した
 * データ管理機能により、自分専用の投資データを蓄積できます。
 *
 * 主要キーワード: 不動産投資, 収支シミュレーション, ROI計算, 投資収益率, 投資データ管理
 */
export const RoiSimulationView: React.FC<Props> = () => {
    return (
        <>
          {/* SEO対策用：視覚的には隠すが、h1タグで検索エンジンにアピール */}
          <VisuallyHidden>不動産投資収支シミュレーション</VisuallyHidden>
          
          <SubTitleStyled variant='h2'>
            ROI計算と収支グラフで投資効果を一目で把握
          </SubTitleStyled>
          
          {/* 機能紹介：箇条書き */}
          <BoxStyled sx={{ mb: 3, mx: 2 }}>
            <FeatureListStyled>
              <FeatureListItemStyled>
                収支入力を行うと、シミュレーション結果がリアルタイムに更新されます。
              </FeatureListItemStyled>
              <FeatureListItemStyled>
                年間・月間ごとの収支をグラフで視覚的に確認できます。
              </FeatureListItemStyled>
              <FeatureListItemStyled>
                シミュレーション結果と物件情報を紐付けて、自分専用の投資データを蓄積できます。
              </FeatureListItemStyled>
            </FeatureListStyled>
          </BoxStyled>

          <BoxStyled sx={{ flexGrow: 1, padding: 2 }}>
            <GridStyled container spacing={2}>
              <LeftGridStyled size={{ xs: 12, sm: 12, md: 6 }}>
                <BoxStyled>
                  <CashFlowInputForm />
                </BoxStyled> 
              </LeftGridStyled>
              <RightGridStyled size={{ xs: 12, sm: 12, md: 6 }}>
                <BoxStyled>
                  <CashFlowResult />
                </BoxStyled>
              </RightGridStyled>
              <UnderGridStyled size={{ xs: 12 }}>
                <BoxStyled>
                  <CashFlowGraph />
                </BoxStyled>
              </UnderGridStyled>
              <UnderGridStyled size={{ xs: 12 }}>
                <BoxStyled>
                  <RealEstateInputForm />
                </BoxStyled>
              </UnderGridStyled>
            </GridStyled>
          </BoxStyled>
        </>
    )
};
