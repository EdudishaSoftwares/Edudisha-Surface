import { ColorType, DisplayType, FontFamilyType, FontStyleType, FontWeightType, PercentSizeType, RemPercentSizeType, RemSizeType, TextDecorationType } from "./commonTypes";

export interface CommonStylingInterface {
    width?: RemPercentSizeType;
    height?: RemPercentSizeType;
    margin?:RemSizeType;
    marginX?:RemSizeType;
    marginY?:RemSizeType;
    marginLeft?: RemSizeType;
    marginRight?: RemSizeType;
    marginTop?: RemSizeType;
    marginBottom?: RemSizeType;
    padding?:RemSizeType;
    paddingX?:RemSizeType;
    paddingY?:RemSizeType;
    paddingLeft?: RemSizeType;
    paddingRight?: RemSizeType;
    paddingTop?: RemSizeType;
    paddingBottom?: RemSizeType;
    borderRadius?: RemSizeType;
    borderTopLeftRadius?: RemSizeType;
    borderTopRightRadius?: RemSizeType;
    borderBottomLeftRadius?: RemSizeType;
    borderBottomRightRadius?: RemSizeType;
    display?: DisplayType;
    opacity?: PercentSizeType;
    onClick?: () => void;
}

export interface TextStylingInterface extends CommonStylingInterface {
    color?: ColorType;
    colorOpacity?: PercentSizeType,
    fontSize?: RemSizeType;
    fontFamily?: FontFamilyType;
    fontStyle?: FontStyleType;
    fontWeight?: FontWeightType;
    textDecoration?: TextDecorationType;
}