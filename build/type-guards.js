"use strict";
/*! type-guards v0.0.1 | MIT | © Hannes Dröse https://github.com/hd-code/js-snippets */function isUndefined(e){return void 0===e}function isNull(e){return null===e}function isBool(e){return"boolean"==typeof e}function isInteger(e){return"number"==typeof e&&Math.floor(e)===e}function isNumber(e){return"number"==typeof e}function isString(e){return"string"==typeof e}function isArray(e,r){if(!(e instanceof Array))return!1;if(!r)return!0;for(let t=0,i=e.length;t<i;t++)if(!r(e[t]))return!1;return!0}function isObject(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function hasKey(e,r,t){var i;return!!(null===(i=e)||void 0===i?void 0:i[r])&&(!t||t(e[r]))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hasKey=exports.isObject=exports.isArray=exports.isString=exports.isNumber=exports.isInteger=exports.isBool=exports.isNull=exports.isUndefined=void 0,exports.isUndefined=isUndefined,exports.isNull=isNull,exports.isBool=isBool,exports.isInteger=isInteger,exports.isNumber=isNumber,exports.isString=isString,exports.isArray=isArray,exports.isObject=isObject,exports.hasKey=hasKey;