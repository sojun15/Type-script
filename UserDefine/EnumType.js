// numeric enum 
var discipline;
(function (discipline) {
    discipline[discipline["cse"] = 2] = "cse";
    discipline[discipline["ece"] = 9] = "ece";
    discipline[discipline["bad"] = 3] = "bad";
})(discipline || (discipline = {}));
console.log(discipline);
// string enum 
var stdInfo;
(function (stdInfo) {
    stdInfo["sojun"] = "15";
    stdInfo["sourov"] = "17";
})(stdInfo || (stdInfo = {}));
console.log(stdInfo);
// heterogeneous enum 
var stdInfo2;
(function (stdInfo2) {
    stdInfo2["sojun"] = "15";
    stdInfo2["sourov"] = "17";
    stdInfo2[stdInfo2["mogammel"] = 31] = "mogammel";
})(stdInfo2 || (stdInfo2 = {}));
console.log(stdInfo2);
