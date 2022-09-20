"use strict";
var Sizes;
(function (Sizes) {
    Sizes[Sizes["SMALL"] = 0] = "SMALL";
    Sizes[Sizes["NORMAL"] = 1] = "NORMAL";
    Sizes[Sizes["LARGE"] = 2] = "LARGE";
})(Sizes || (Sizes = {}));
console.log(Sizes.SMALL);
var Sizes2;
(function (Sizes2) {
    Sizes2["SMALL"] = "12px";
    Sizes2["NORMAL"] = "16px";
    Sizes2["LARGE"] = "24px";
})(Sizes2 || (Sizes2 = {}));
console.log(Sizes2.SMALL);
