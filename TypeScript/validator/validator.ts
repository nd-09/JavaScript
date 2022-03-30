import { IValidator } from '../interface/interface_module'

class ValidatorCLS implements IValidator{
    isValid(str:string, regex: RegExp, min_value: number, max_value?: number):boolean{

        return (max_value)?(str.length >= min_value && str.length <= max_value && regex.test(str)):(regex.test(str))
    }
}
export { ValidatorCLS };