"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluck = void 0;
var pluck = function (elements, filed) {
    return elements.map(function (element) { return element[filed]; });
};
exports.pluck = pluck;
(0, exports.pluck)([{ name: "taofik" }], "name");
// returns  ['taofik]
