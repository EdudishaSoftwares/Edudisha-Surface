import { CommonStylingInterface } from "../commons/commonInterface";
import {
    RemPercentSizeType,
    NumberInitialInheritType,
    PercentSizeType,
    VisibilityType,
    RemSizeType,
    ColorType,
    BorderStyleType,
    BackgroundSizeType,
    DegType,
    TextAlign,
    FlexDirectionType,
    FlexWrapType,
    JustifyContentType,
    AlignItemsType,
    AlignContentType,
    AlignSelfType,
    PositionType,
} from "../commons/commonTypes";

export interface ContainerProps extends CommonStylingInterface {
    zIndex?: NumberInitialInheritType;
    visibility?: VisibilityType;
    color?: ColorType;
    colorOpacity?: PercentSizeType;
    borderWidth?: RemSizeType;
    borderColor?: ColorType;
    borderColorOpacity?: PercentSizeType;
    borderStyle?: BorderStyleType;
    boxShadowX?: RemPercentSizeType;
    boxShadowY?: RemPercentSizeType;
    boxShadowColor?: ColorType;
    boxShadowColorOpacity?: PercentSizeType;
    boxShadowBlur?: RemPercentSizeType;
    boxShadowSpread?: RemPercentSizeType;
    boxShadowInset?: boolean;
    backgroundColor?: ColorType;
    backgroundColorOpacity?: PercentSizeType;
    backgroundImageUrl?: string;
    backgroundSize?: BackgroundSizeType;
    linearGradiantDeg?: DegType;
    linearGradiantColor1?: ColorType;
    linearGradiantColorOpacity1?: PercentSizeType;
    linearGradiantColorStop1?: PercentSizeType;
    linearGradiantColor2?: ColorType;
    linearGradiantColorOpacity2?: PercentSizeType;
    linearGradiantColorStop2?: PercentSizeType;
    linearGradiantColor3?: ColorType;
    linearGradiantColorOpacity3?: PercentSizeType;
    linearGradiantColorStop3?: PercentSizeType;
    textAlign?: TextAlign;
    flexDirection?: FlexDirectionType;
    flexWrap?: FlexWrapType;
    justifyContent?: JustifyContentType;
    alignItems?: AlignItemsType;
    alignContent?: AlignContentType;
    order?: NumberInitialInheritType;
    flexGrow?: NumberInitialInheritType;
    flexShrink?: NumberInitialInheritType;
    flexBasis?: RemPercentSizeType;
    alignSelf?: AlignSelfType;
    gap?: RemPercentSizeType;
    scale?: string;
    position?: PositionType;
    left?: RemPercentSizeType;
    right?: RemPercentSizeType;
    top?: RemPercentSizeType;
    bottom?: RemPercentSizeType;
    aspectRatio?: NumberInitialInheritType;
    aspectRatioWidth?: number;
    aspectRatioHeight?: number;
    children: React.ReactNode;
}
