interface IValidator{
    isValid(str:string, regex: RegExp, min_value: number, max_value?: number):boolean
}
export{IValidator}