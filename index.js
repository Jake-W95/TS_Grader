var QA = 25;
var correctAnswers = answerGen(QA);
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
    { name: 'Jake', answers: answerGen(QA) },
    { name: 'Chloe', answers: answerGen(QA) },
    { name: 'Sam', answers: answerGen(QA) },
    { name: 'Dennis', answers: answerGen(QA) },
    { name: 'Joe', answers: answerGen(QA) },
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
        }
    }
}
for (var i = 0; i < QA; i++) {
    var percentage = correctFreq[i] / studentList.length * 100;
    console.log("Q".concat(i + 1, ": ").concat(percentage, "% of students answered correctly"));
}
// function answerSort(Qnum: number) {
//     let T = 0;
//     let F = 0;
//     let L = 0;
//     answerGen(Qnum).forEach((answer) => {
//         L++;
//         answer.Qanswer === true ? T++ : F++;
//         console.log(answer)
//     }
//     )
//     console.log(T / L * 100 + '% of the questions were true')
// }
