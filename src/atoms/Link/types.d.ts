import { TextStylingInterface } from "../commons/commonInterface";
import { AnchorRelType, AnchorTargetType} from "../commons/commonTypes";

export interface LinkProps extends TextStylingInterface{
    referrerPolicy?: ReferrerPolicyType,
    href?:string;
    download?: bolean,
    ping?: string,
    rel?: AnchorRelType,
    target?: AnchorTargetType,
    children: React.ReactNode;
}