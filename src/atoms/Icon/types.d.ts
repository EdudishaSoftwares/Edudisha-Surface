import { ColorType, AlignType, NumberInitialInheritType, PercentSizeType } from "../commons/commonTypes"
import { CommonStylingInterface } from "../commons/commonInterface";
export interface IconProps extends CommonStylingInterface{
    fill?: ColorType;
    fillOpacity?: PercentSizeType;
    stroke?: ColorType;
    strokeOpacity?: PercentSizeType;
    align?: AlignType
    aspectRatio?: NumberInitialInheritType;
    aspectRatioWidth?: number;
    aspectRatioHeight?: number;
    iconUrl?: string;
    altText?: string;
    altTextMaxLength?: number;
}

