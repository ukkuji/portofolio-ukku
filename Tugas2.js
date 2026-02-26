let gabriel=[85, 95.20, 67.75, 78, 75];
let rata2=0;
let total=0;

for (let index = 0; index < gabriel.length; index++) {
    total += gabriel[index];
    console.log("total ",total);
}
rata2 = total / gabriel.length
console.log("total ",total);
console.log("rata2",rata2);

switch (true) {
    case rata2 >= 90 && rata2 <= 100:
      grade = "A";
      break;
    case rata2 >= 80 && rata2 < 90:
      grade = "B";
      break;
    case rata2 >= 75 && rata2 < 80:
      grade = "C";
      break;
    case rata2 >= 60 && rata2 < 75:
      grade = "D";
      break;
    default:
      grade = "E";
}
console.log("Grade Akhir:", grade);