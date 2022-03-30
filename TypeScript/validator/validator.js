"use strict";
exports.__esModule = true;
exports.ValidatorCLS = void 0;
var ValidatorCLS = /** @class */ (function () {
    function ValidatorCLS() {
    }
    ValidatorCLS.prototype.isValid = function (str, regex, min_value, max_value) {
        return (max_value) ? (str.length >= min_value && str.length <= max_value && regex.test(str)) : (regex.test(str));
    };
    return ValidatorCLS;
}());
exports.ValidatorCLS = ValidatorCLS;
