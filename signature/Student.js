var student1;
var student2;
var student3;
student1 = function () {
    console.log("My name is sojun chandra, student id 210215");
};
student2 = function (name, id) {
    console.log("My name is ".concat(name, ", student id ").concat(id));
};
student3 = function (name, id) {
    return "My name is ".concat(name, ", student id ").concat(id);
};
student1();
student2('sourov shome', 210217);
console.log(student3('mogambel hossen', 210231));
