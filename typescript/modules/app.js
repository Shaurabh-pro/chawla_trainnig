"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var teacher_1 = require("./teacher");
var teacher = new teacher_1.default();
console.log(teacher.show);
var student = new Student_1.default();
console.log(student.show);
