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
interface FormData {
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
    loading: boolean;
    error: string | null;
};

const prefectures = [
    { code: 'Hokkaido', name: '北海道' },
    { code: 'Aomori', name: '青森県' },
    { code: 'Iwate', name: '岩手県' },
    { code: 'Miyagi', name: '宮城県' },
    { code: 'Akita', name: '秋田県' },
    { code: 'Yamagata', name: '山形県' },
    { code: 'Fukushima', name: '福島県' },
    { code: 'Ibaraki', name: '茨城県' },
    { code: 'Tochigi', name: '栃木県' },
    { code: 'Gunma', name: '群馬県' },
    { code: 'Saitama', name: '埼玉県' },
    { code: 'Chiba', name: '千葉県' },
    { code: 'Tokyo', name: '東京都' },
    { code: 'Kanagawa', name: '神奈川県' },
    { code: 'Niigata', name: '新潟県' },
    { code: 'Toyama', name: '富山県' },
    { code: 'Ishikawa', name: '石川県' },
    { code: 'Fukui', name: '福井県' },
    { code: 'Yamanashi', name: '山梨県' },
    { code: 'Nagano', name: '長野県' },
    { code: 'Gifu', name: '岐阜県' },
    { code: 'Shizuoka', name: '静岡県' },
    { code: 'Aichi', name: '愛知県' },
    { code: 'Mie', name: '三重県' },
    { code: 'Shiga', name: '滋賀県' },
    { code: 'Kyoto', name: '京都府' },
    { code: 'Osaka', name: '大阪府' },
    { code: 'Hyogo', name: '兵庫県' },
    { code: 'Nara', name: '奈良県' },
    { code: 'Wakayama', name: '和歌山県' },
    { code: 'Tottori', name: '鳥取県' },
    { code: 'Shimane', name: '島根県' },
    { code: 'Okayama', name: '岡山県' },
    { code: 'Hiroshima', name: '広島県' },
    { code: 'Yamaguchi', name: '山口県' },
    { code: 'Tokushima', name: '徳島県' },
    { code: 'Kagawa', name: '香川県' },
    { code: 'Ehime', name: '愛媛県' },
    { code: 'Kochi', name: '高知県' },
    { code: 'Fukuoka', name: '福岡県' },
    { code: 'Saga', name: '佐賀県' },
    { code: 'Nagasaki', name: '長崎県' },
    { code: 'Kumamoto', name: '熊本県' },
    { code: 'Oita', name: '大分県' },
    { code: 'Miyazaki', name: '宮崎県' },
    { code: 'Kagoshima', name: '鹿児島県' },
    { code: 'Okinawa', name: '沖縄県' }
];

export const RealEstateInputFormView: React.FC<Props> = ({
    formData,
    handleChange,
    handleSave,
    loading,
    error,
}) => {

    return (
        <>
            <PaperStyled>
                <TitleTypographyStyled>シュミレーション結果と紐付けて保存する</TitleTypographyStyled>
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
                        <FormHelperTextStyled>後で編集が可能です</FormHelperTextStyled>
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

                {/* 保存ボタン */}
                <Grid2Styled container justifyContent="flex-end" spacing={2}>
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
