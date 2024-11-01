import { ColorType, FontWeightType} from "../commons/commonTypes";

export const BaseFontSize = "26%"

export const ColorMap : Record<ColorType, string> = {
    voilet: "118, 18, 250",
    purple: "183, 18, 239",
    lightPurple: "150, 76, 234",
    indigo: "94, 84, 238",
    blue: "60, 128, 250",
    darkblue: "19, 67, 227",
    skyBlue: "48, 175, 255",
    lightBlue: "79, 119, 249",
    oceanBlue: "63, 155, 179",
    green: "0, 184, 132",
    darkGreen: "6, 184, 0",
    yellow: "255, 182, 54",
    orange: "255, 98, 33",
    red: "218, 22, 0",
    pink: "251, 45, 160",
    white: "255, 255, 255",
    lightGray: "241, 241, 249",
    gray: "143, 143, 143",
    black: "0, 0, 0"
};

export const FontWeightMap: Record<FontWeightType, number> = {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
};