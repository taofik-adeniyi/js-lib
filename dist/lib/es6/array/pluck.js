export var pluck = function (elements, filed) {
    return elements.map(function (element) { return element[filed]; });
};
pluck([{ name: "taofik" }], "name");
// returns  ['taofik]
