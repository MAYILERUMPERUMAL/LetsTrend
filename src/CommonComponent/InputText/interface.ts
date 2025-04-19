export interface InnputTextProps{
    value:string;
    palceholder:string;
    onChangeText:(text:string)=>void;
    isPasswordField:Boolean
}