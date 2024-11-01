import { CommonStylingInterface } from "../commons/commonInterface";
import { NumberInitialInheritType } from "../commons/commonTypes";

export interface ImageProps extends CommonStylingInterface {
    imageUrl?: string;
    altText?: string;
    altTextMaxLength?: number;
    aspectRatio?: NumberInitialInheritType;
    aspectRatioWidth?: number;
    aspectRatioHeight?: number;
}
