
// assignment
/*
    1. create a password and username generator
    2. create a unit converter e.g minutes  -  second, second - minutes
    3. create a array students each with scores per subject[ca1, ca2,ca3 exam]
        a. compute the result  and return a calculated score sheet with grades and remark
        b. return the class average 
        c. return the highest and loweest in class
        d. class population
    4. Create an object for a payment transaction - receiept or invoice 
    car2 = {... car}

*/
function genPass(len = 5) {
    pass = ''
    letters = `ABCDEFGHJKLOUwtrbncsadfhhjm12356787)_)(&*&)`
    for (i = 0; i < len; i++) {
        index = Math.floor(Math.random() * letters.length)
        pass += letters[index]
    }
    return pass

}
function converter(second, minute) {
    if (second > 0) {
        minutes = second / 60
        console.log("time in minutes is " + minutes + " minutes ")
    }
    if (minute > 0) {
        seconds = minute * 60
        console.log("time in seconds  is " + seconds + " seconds ")
    }

}


const students = [
    {
        id: "STU010",
        name: "Musa Ibrahim",
        subjects: [
            {
                name: "Maths",
                scores: [
                    { name: "ca1", score: 15 },
                    { name: "ca2", score: 12 },
                    { name: "ca3", score: 8 },
                    { name: "exam", score: 52 }
                ]
            }
        ]
    },
    {
        id: "STU010",
        name: "Musa Ibrahim",
        subjects: [
            {
                name: "Maths",
                scores: [
                    { name: "ca1", score: 15 },
                    { name: "ca2", score: 12 },
                    { name: "ca3", score: 8 },
                    { name: "exam", score: 52 }
                ]
            }
        ]
    },
    {
        id: "STU010",
        name: "Musa Ibrahim",
        subjects: [
            {
                name: "Maths",
                scores: [
                    { name: "ca1", score: 15 },
                    { name: "ca2", score: 12 },
                    { name: "ca3", score: 8 },
                    { name: "exam", score: 52 }
                ]
            }
        ]
    },
    {
        id: "STU010",
        name: "Musa Ibrahim",
        subjects: [
            {
                name: "Maths",
                scores: [
                    { name: "ca1", score: 15 },
                    { name: "ca2", score: 12 },
                    { name: "ca3", score: 8 },
                    { name: "exam", score: 52 }
                ]
            }
        ]
    }
];


function grade(score) {
    // Ensure the score is within valid bounds
    if (score < 0 || score > 100) {
        return { letter: "Invalid", remark: "Score must be between 0 and 100" };
    }

    if (score >= 70) {
        return { letter: "A", remark: "Excellent" };
    } else if (score >= 60) {
        return { letter: "B", remark: "Very Good" };
    } else if (score >= 50) {
        return { letter: "C", remark: "Good" };
    } else if (score >= 45) {
        return { letter: "D", remark: "Pass" };
    } else if (score >= 40) {
        return { letter: "E", remark: "Fair Pass" };
    } else {
        return { letter: "F", remark: "Fail" };
    }
}
function result_sheet(data) {
    if (data.length) {

        data.forEach((s, index) => {
            let subjects = s.subjects
            subjects.forEach(sj=>{
                total = 0;
                sj.scores.forEach(sc=>{
                    total+=sc.score
                })
            })
            entry = ` ${index + 1}. ${s.name} - ${total}  - ${grade(total).letter}  ${grade(total).remark}  `
            console.log(entry)
        });
    } else {
        console.log("Empty scores")
    }

}


result_sheet(students)

