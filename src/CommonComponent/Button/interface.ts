export interface ButtonInterface{
    isPrimary:Boolean;
    isSecondary:Boolean;
    image:string;
    text:string;
    OnClick:()=> void;
}