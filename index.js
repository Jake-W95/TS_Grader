var QA = 25;
var correctAnswers = answerGen(QA);
var studentScores = [];
function answerGen(amount) {
    var answers = [];
    for (var i = 0; i < amount; i++) {
        var bool = void 0;
        var Qnum = i;
        Math.random() < 0.5 ? bool = true : bool = false;
        var answer = { Qnum: Qnum, Qanswer: bool };
        answers.push(answer);
    }
    return answers;
}
var studentList = [
    { name: 'Jake', answers: answerGen(QA), correct: 0 },
    { name: 'Chloe', answers: answerGen(QA), correct: 0 },
    { name: 'Sam', answers: answerGen(QA), correct: 0 },
    { name: 'Dennis', answers: answerGen(QA), correct: 0 },
    { name: 'Joe', answers: answerGen(QA), correct: 0 },
];
var correctFreq = [];
for (var i = 0; i < QA; i++) {
    correctFreq.push(0);
}
for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
    var student = studentList_1[_i];
    for (var i = 0; i < QA; i++) {
        if (student.answers[i].Qanswer === correctAnswers[i].Qanswer) {
            correctFreq[i] += 1;
            student.correct += 1;
        }
    }
    studentScores.push(student.correct);
}
var highScore = Math.max.apply(Math, studentScores);
var bestStudent;
for (var _a = 0, studentList_2 = studentList; _a < studentList_2.length; _a++) {
    var student = studentList_2[_a];
    if (student.correct === highScore) {
        bestStudent = student;
    }
}
for (var i = 0; i < QA; i++) {
    var percentage = correctFreq[i] / studentList.length * 100;
    console.log("Q".concat(i + 1, ": ").concat(percentage, "% of students answered correctly"));
}
console.log("".concat(bestStudent.name, " was the highest scoring student with ").concat(bestStudent.correct, " correct answers"));
