const QA: number = 25
const correctAnswers = answerGen(QA)
type Student = { name: string, answers: Array<{}> }


function answerGen(amount: number) {
    type Answer = { Qnum: number; Qanswer: boolean };
    const answers: Array<Answer> = [];
    for (let i = 0; i < amount; i++) {
        let bool: boolean;
        let Qnum = i;
        Math.random() < 0.5 ? bool = true : bool = false
        let answer: Answer = { Qnum: Qnum, Qanswer: bool }
        answers.push(answer)
    }
    return answers
}

const studentList: Student[] = [
    { name: 'Jake', answers: answerGen(QA) },
    { name: 'Chloe', answers: answerGen(QA) },
    { name: 'Sam', answers: answerGen(QA) },
    { name: 'Dennis', answers: answerGen(QA) },
    { name: 'Joe', answers: answerGen(QA) },
]

let correctFreq: number[] = [];
for (let i = 0; i < QA; i++) {
    correctFreq.push(0)
}

for (let student of studentList) {
    for (let i = 0; i < QA; i++) {
        
        if (student.answers[i].Qanswer === correctAnswers[i].Qanswer) {
            correctFreq[i] += 1;
        }
    }
}
for(let i = 0; i < QA; i++){

    let percentage = correctFreq[i] / studentList.length * 100;
    console.log(`Q${i+1}: ${percentage}% of students answered correctly`)
}
