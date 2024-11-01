import { TextStylingInterface
    
 } from "../commons/commonInterface";
export interface TextProps extends TextStylingInterface {
    children: React.ReactNode;
}