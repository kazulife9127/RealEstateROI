// src/components/RealEstateInputForm/RealEstateInputForm.view.tsx

import React from 'react';
import {
    PaperStyled,
    TextFieldStyled,
    Grid2Styled,
    ButtonStyled,
    TitleTypographyStyled,
    MenuItemStyled,
    BoxStyled,
    FormHelperTextStyled
} from "./RealEstateInputForm.style";

// フォームデータの型定義
export interface FormData {
    propertyName: string;
    prefecture: string;
    city: string;
    addressLine: string;
    buildingInfo: string;
    importance: string;
}

export type Props = {
    formData: FormData;
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    handleSave: () => Promise<void>;
    handleReset: () => void;
    loading: boolean;
    error: string | null;
};

const prefectures = [
    { code: '北海道', name: '北海道' },
    { code: '青森県', name: '青森県' },
    { code: '岩手県', name: '岩手県' },
    { code: '宮城県', name: '宮城県' },
    { code: '秋田県', name: '秋田県' },
    { code: '山形県', name: '山形県' },
    { code: '福島県', name: '福島県' },
    { code: '茨城県', name: '茨城県' },
    { code: '栃木県', name: '栃木県' },
    { code: '群馬県', name: '群馬県' },
    { code: '埼玉県', name: '埼玉県' },
    { code: '千葉県', name: '千葉県' },
    { code: '東京都', name: '東京都' },
    { code: '神奈川県', name: '神奈川県' },
    { code: '新潟県', name: '新潟県' },
    { code: '富山県', name: '富山県' },
    { code: '石川県', name: '石川県' },
    { code: '福井県', name: '福井県' },
    { code: '山梨県', name: '山梨県' },
    { code: '長野県', name: '長野県' },
    { code: '岐阜県', name: '岐阜県' },
    { code: '静岡県', name: '静岡県' },
    { code: '愛知県', name: '愛知県' },
    { code: '三重県', name: '三重県' },
    { code: '滋賀県', name: '滋賀県' },
    { code: '京都府', name: '京都府' },
    { code: '大阪府', name: '大阪府' },
    { code: '兵庫県', name: '兵庫県' },
    { code: '奈良県', name: '奈良県' },
    { code: '和歌山県', name: '和歌山県' },
    { code: '鳥取県', name: '鳥取県' },
    { code: '島根県', name: '島根県' },
    { code: '岡山県', name: '岡山県' },
    { code: '広島県', name: '広島県' },
    { code: '山口県', name: '山口県' },
    { code: '徳島県', name: '徳島県' },
    { code: '香川県', name: '香川県' },
    { code: '愛媛県', name: '愛媛県' },
    { code: '高知県', name: '高知県' },
    { code: '福岡県', name: '福岡県' },
    { code: '佐賀県', name: '佐賀県' },
    { code: '長崎県', name: '長崎県' },
    { code: '熊本県', name: '熊本県' },
    { code: '大分県', name: '大分県' },
    { code: '宮崎県', name: '宮崎県' },
    { code: '鹿児島県', name: '鹿児島県' },
    { code: '沖縄県', name: '沖縄県' }
];


export const RealEstateInputFormView: React.FC<Props> = ({
    formData,
    handleChange,
    handleSave,
    handleReset,
    loading,
    error,
}) => {

    return (
        <>
            <PaperStyled>
                <TitleTypographyStyled>シュミレーション結果と紐付けて保存する</TitleTypographyStyled>
                {/* <FormHelperTextStyled>※Spreadsheetページで編集が可能です。</FormHelperTextStyled> */}
                <Grid2Styled container alignItems="center" spacing={2}>
                    {/* 物件名 */}
                    <Grid2Styled size={{ lg: 5 }}>
                        <TextFieldStyled
                            label="物件名"
                            sx={{ width: '100%' }}
                            variant="outlined"
                            margin="normal"
                            type="text"
                            name="propertyName"
                            value={formData.propertyName}
                            onChange={handleChange}
                        />
                    </Grid2Styled>
                </Grid2Styled>

                <BoxStyled>
                    <Grid2Styled container spacing={2}>
                        {/* 都道府県 */}
                        <Grid2Styled size={{ xs: 12, sm: 6, lg: 1 }}>
                            <TextFieldStyled
                                select
                                label="都道府県"
                                sx={{ width: '100%' }}
                                variant="outlined"
                                margin="normal"
                                name="prefecture"
                                value={formData.prefecture}
                                onChange={handleChange}
                            >
                                {prefectures.map((pref) => (
                                        <MenuItemStyled key={pref.code} value={pref.code}>
                                            {pref.name}
                                        </MenuItemStyled>
                                    ))}
                            </TextFieldStyled>
                        </Grid2Styled>

                        {/* 市区町村 */}
                        <Grid2Styled size={{ xs: 12, sm: 6, lg: 3 }}>
                            <TextFieldStyled
                                label="市区町村"
                                sx={{ width: '100%' }}
                                variant="outlined"
                                margin="normal"
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </Grid2Styled>

                        {/* 番地 */}
                        <Grid2Styled size={{ xs: 12, sm: 6, lg: 4 }}>
                            <TextFieldStyled
                                label="番地"
                                sx={{ width: '100%' }}
                                variant="outlined"
                                margin="normal"
                                type="text"
                                name="addressLine"
                                value={formData.addressLine}
                                onChange={handleChange}
                            />
                        </Grid2Styled>

                        {/* 建物名・部屋番号 */}
                        <Grid2Styled size={{ xs: 12, sm: 6, lg: 4 }}>
                            <TextFieldStyled
                                label="建物名・部屋番号"
                                sx={{ width: '100%' }}
                                variant="outlined"
                                margin="normal"
                                type="text"
                                name="buildingInfo"
                                value={formData.buildingInfo}
                                onChange={handleChange}
                            />
                        </Grid2Styled>
                    </Grid2Styled>
                </BoxStyled>

                {/* 重要度 */}
                <Grid2Styled size={{ xs: 12 }}>
                    <TextFieldStyled
                        select
                        sx={{ width: '100%' }}
                        label="重要度"
                        variant="outlined"
                        margin="normal"
                        name="importance"
                        value={formData.importance}
                        onChange={handleChange}
                    >
                        <MenuItemStyled value="A">A</MenuItemStyled>
                        <MenuItemStyled value="B">B</MenuItemStyled>
                        <MenuItemStyled value="C">C</MenuItemStyled>
                        <MenuItemStyled value="D">D</MenuItemStyled>
                        <MenuItemStyled value="E">E</MenuItemStyled>
                    </TextFieldStyled>
                </Grid2Styled>

                {/* エラーメッセージの表示 */}
                {error && (
                    <FormHelperTextStyled error>
                        {error}
                    </FormHelperTextStyled>
                )}
                 
                 <Grid2Styled container justifyContent="flex-end" spacing={2}>
                    {/* リセットボタン */}
                    <Grid2Styled>
                        <ButtonStyled 
                            variant="contained" 
                            color="secondary"
                            onClick={handleReset}
                        >
                            リセット
                        </ButtonStyled>
                    </Grid2Styled>
                    {/* 保存ボタン */}
                    <Grid2Styled>
                        <ButtonStyled
                            variant="contained" 
                            color="primary"
                            onClick={handleSave}
                            disabled={loading}
                        >
                            {loading ? '保存中...' : '保存する'}
                        </ButtonStyled>
                    </Grid2Styled>
                </Grid2Styled>
            </PaperStyled>
        </>
    );
};
