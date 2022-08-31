const n1 = 60;
const n2 = 80;
const n3 = 90;

const media = (n1 + n2 + n3) / 3;

if (media < 50) {
    console.log("reprovado");
} else if (media > 50 && media < 70) {
    console.log("recuperação");
} else {
    console.log("passou de semestre");
}