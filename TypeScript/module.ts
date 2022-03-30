import { ValidatorCLS } from "./validator/validator"
import { Constants} from "./constant/constant"

let email = "navdeep007.cn@gmail.com";
let name = "Navdeepchandra Chovatiya";
let pincode = "3620037";
let phoneNo = "9979939143";

let validator = new ValidatorCLS();

let emailResult = validator.isValid(email,Constants.emailRegex,3,200);
let nameResult = validator.isValid(name,Constants.nameRegex,5,20);
let pincodeResult = validator.isValid(pincode,Constants.numberRegex,6);
let phoneNoResult = validator.isValid(phoneNo,Constants.numberRegex,10);  

console.log("Valid Email Id Or Not:",emailResult);
console.log("Valid Name Or Not:",nameResult);
console.log("Valid Pincode Or Not:",pincodeResult);
console.log("Valid Phone Or Not:",phoneNoResult);
