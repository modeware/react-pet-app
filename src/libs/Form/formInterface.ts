export interface FormPropsInterface {
   formArray: Array<BasicInputs>
   submitCallBack?: (arg1: any, ...rest: any) => void| undefined

}

type BasicInputs= {
    name: string
    type: string
    placeholder?: string
}