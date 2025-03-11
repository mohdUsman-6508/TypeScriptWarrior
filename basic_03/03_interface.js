"use strict";
// in interfaces we can do reopening of it , but in types we cannot
// Reopening
var subType;
(function (subType) {
    subType["Standard"] = "Standard";
    subType["Premium"] = "Premium";
    subType["Super"] = "Super";
})(subType || (subType = {}));
const newton = {
    id: 1,
    email: "n@n.com",
    startTrial: () => "Trial started!",
    getCoupon: (name, off) => 10,
    subscriptionType: subType.Premium,
};
