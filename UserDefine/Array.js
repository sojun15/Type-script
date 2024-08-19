// we can declare array in both ways
var disciplines;
var codes;
disciplines = ["cse", "ece", "bad"];
codes = [2, 9, 3];
for (var i = 0; i < codes.length; i++) {
    console.log("Discipline : ".concat(disciplines[i], ", code : ").concat(codes[i]));
}
// let studentInfo: (string | number)[];
var studentInfo;
studentInfo = ['sojun', 15, 'sourov', 17, 'mogammel', 31];
for (var index = 0; index < studentInfo.length; index += 2) {
    console.log("Name : ".concat(studentInfo[index], ", sid : ").concat(studentInfo[index + 1]));
}
