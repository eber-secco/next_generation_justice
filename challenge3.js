// CHALLENGE 3
/**
 * Student class to store student details and grades.
 */
class Student {
    /**
     * Constructor to initialize student properties.
     * @param {string} firstName - The student's first name.
     * @param {number} mathGrade - The student's math grade.
     * @param {number} englishGrade - The student's English grade.
     * @param {number} scienceGrade - The student's science grade.
     */
    constructor(firstName, mathGrade, englishGrade, scienceGrade) {
        this.firstName = firstName;
        this.mathGrade = mathGrade;
        this.englishGrade = englishGrade;
        this.scienceGrade = scienceGrade;
    }
}

// Creating an array of students
const students = [
    new Student("Eber", 87, 89, 90),
    new Student("Ana", 99, 80, 78),
    new Student("Ester", 67, 100, 89)
];

/**
 * Function that calculates the average grade for each subject.
 * @param {Student[]} students - Array of Student objects.
 * @returns {Object} An object with average grades for each subject.
 */
function averageGrade(students) {
    let totalMath = 0, totalEnglish = 0, totalScience = 0;

    // Loop through each student and sum up their grades
    students.forEach(student => {
        totalMath += student.mathGrade;
        totalEnglish += student.englishGrade;
        totalScience += student.scienceGrade;
    });

    const numStudents = students.length; // Total number of students

    // Return an object with the calculated averages
    return {
        math: totalMath / numStudents,
        english: totalEnglish / numStudents,
        science: totalScience / numStudents
    };
}

console.log(averageGrade(students));