// ============
// 1-masala:
//  Berilgan son musbat bo‘lsa, 1 chiqarilsin.
let firstNumber1 = +prompt("son kriting")
if (firstNumber1 > 0) {
    console.log(1)
}
// ============
// 2-masala:
//  Agar son manfiy bo‘lsa, -1 chiqarilsin, aks holda 0 chiqarilsin.
let firstNumber2 = +prompt("son kriting")
if(firstNumber2 < 0){
    console.log(-1)
}else {
    console.log(0)
}
// ============
// 3-masala:
//  Agar son 0 ga teng bo‘lsa, 1 chiqarilsin, aks holda 0 chiqarilsin.
let firstNumber3 = +prompt("son kriting")
if(firstNumber3 == 0) {
console.log(1)
}else {
console.log(0)
}

// ============
// 4-masala:
//  Son musbat va 100 dan katta bo‘lsa, 1 chiqarilsin.
let firstNumber4 = +prompt("son kriting")
if (firstNumber4 > 100){
console.log(1)
}

// ============
// 5-masala:
// Agar son manfiy va 10 dan kichik bo‘lsa, -1 chiqarilsin.
let firstNumber5 = +prompt("son kriting")
if(firstNumber5 > 0){
console.log(-1)
}

// ============
// 6-masala:
//  Son musbat bo‘lsa, uning kvadrati chiqarilsin, aks holda 0 chiqarilsin.
let firstNumber6 = +prompt("son kriting")
if(firstNumber6 > 0) {
console.log(firstNumber6 ** 2)
}else {
console.log(0)
}

// ============
// 7-masala:
//  Agar son manfiy bo‘lsa, uning absolyut qiymati chiqarilsin.
let firstNumber7 = +prompt("son kriting")
if(firstNumber7 < 0){
console.log(firstNumber7 * (-1))
}else {
console.log(firstNumber7)
}

// ============
// 8-masala:
//  Son nolga teng bo‘lsa, 10 chiqarilsin, aks holda sonning o‘zi chiqarilsin.
let firstNumber8 = +prompt("son kriting")
if(firstNumber8 == 0) {
    console.log(10)
}else {
    console.log(firstNumber8)
}

// ============
// 9-masala:
//  Agar son 1 dan katta bo‘lsa, sonning kubi chiqarilsin.
let firstNumber9 = +prompt("son kriting")
if(firstNumber9 > 1){
    console.log(firstNumber9 ** 3)
}

// ============
// 10-masala:
//  Son 0 dan kichik bo‘lsa, -10 chiqarilsin, aks holda 10 chiqarilsin.
let firstNumber10 = +prompt("son kriting")
if(firstNumber10 > 0){
    console.log(-10)
}else {
    console.log(10)
}

// ============
// 11-masala:
//  Agar son juft bo‘lsa, 2 chiqarilsin, aks holda 1 chiqarilsin.
let firstNumber11 = +prompt("son kriting")
if(firstNumber11 % 2 == 0) {
    console.log(2)
}else {
    console.log(1)
}
// ============
// 12-masala:
//  Agar son toq bo‘lsa, 3 chiqarilsin, aks holda 4 chiqarilsin.
let firstNumber12 = +prompt("son kriting")
if(firstNumber12 % 2 == 0) {
    console.log(4)
}else {
    console.log(3)
}

// ============
// 13-masala:
//  Son juft va 10 dan katta bo‘lsa, 1 chiqarilsin.
let firstNumber13 = +prompt("son kriting")
if(firstNumber13 % 2 == 0 && firstNumber13 > 10){
    console.log(1)
}

// ============
// 14-masala:
//  Agar son toq va manfiy bo‘lsa, -1 chiqarilsin.
let firstNumber14= +prompt("son kriting")
if(firstNumber14 % 2 == 1 && firstNumber14 < 0){
    console.log(-1)
}

// ============
// 15-masala:
//  Son juft va 5 ga bo‘linadigan bo‘lsa, 100 chiqarilsin.
let firstNumber15 = +prompt("son kriting")
if(firstNumber15 % 2 == 0 && firstNumber15 % 5 == 0){
    console.log(100)
}

// ============
// 16-masala:
//  Agar son juft bo‘lmasa, sonning kvadrati chiqarilsin.
let firstNumber16 = +prompt("son kriting")
if(firstNumber16 % 2 == 1){
    console.log(firstNumber16 ** 2)
}

// ============
// 17-masala:
//  Son juft va musbat bo‘lsa, uning kubi chiqarilsin.
let firstNumber17 = +prompt("son kriting")
if(firstNumber17 % 2 == 0 && firstNumber17 > 0){
    console.log(firstNumber17 ** 3)
}

// ============
// 18-masala:
//  Agar son juft va 20 dan katta bo‘lsa, 50 chiqarilsin, aks holda -50 chiqarilsin.
let firstNumber18 = +prompt("son kriting")
if(firstNumber18 % 2 == 0 && firstNumber18 > 20){
    console.log(50)
}else {
    console.log(-50)
}

// ============
// 19-masala:
//  Son toq va 7 ga bo‘linadigan bo‘lsa, 7 chiqarilsin.
let firstNumber19 = +prompt("son kriting")
if(firstNumber19 % 2 == 1 && firstNumber19 % 7 == 0){
    console.log(7)
}

// ============
// 20-masala:
//  Agar son juft va manfiy bo‘lsa, -20 chiqarilsin.
let firstNumber20 = +prompt("son kriting")
if(firstNumber20 % 2 == 0 && firstNumber20 < 0){
    console.log(-20)
}

// ============
// 21-masala:
//  Ikki son teng bo‘lsa, 1 chiqarilsin, aks holda 0 chiqarilsin.
let firstNumber21 = +prompt("son kriting")
let secondNumber21 = +prompt("son kriting")
if(firstNumber21 == secondNumber21) {
    console.log(1)
}else {
    console.log(-1)
}
// ============
// 22-masala:
//  Agar birinchi son ikkinchisidan katta bo‘lsa, 2 chiqarilsin, aks holda 3 chiqarilsin.
let firstNumber22 = +prompt("son kriting")
let secondNumber22 = +prompt("son kriting")
if(firstNumber22 > secondNumber22) {
    console.log(2)
}else {
    console.log(3)
}

// ============
// 23-masala:
//  Birinchi son ikkinchisidan kichik va musbat bo‘lsa, 10 chiqarilsin.
let firstNumber23 = +prompt("son kriting")
let secondNumber23 = +prompt("son kriting")
if(firstNumber23 < secondNumber23 && firstNumber23 > 0) {
    console.log(10)
}


// ============
// 24-masala:
//  Agar birinchi son ikkinchisidan katta va toq bo‘lsa, 5 chiqarilsin.
let firstNumber24 = +prompt("son kriting")
let secondNumber24 = +prompt("son kriting")
if(firstNumber24 > secondNumber24 && firstNumber24 & 2 != 0) {
    console.log(5)
}


// ============
// 25-masala:
//  Ikkala son ham musbat bo‘lsa, ularning yig‘indisi chiqarilsin.
let firstNumber25 = +prompt("son kriting")
let secondNumber25 = +prompt("son kriting")
let sum
if(firstNumber25 > 0 && secondNumber25 > 0){
    sum = firstNumber25 + secondNumber25
}
console.log(sum)
// ============
// 26-masala:
//  Agar birinchi son ikkinchisidan kichik va ikkinchi son juft bo‘lsa, -1 chiqarilsin.
let firstNumber26 = +prompt("son kriting")
let secondNumber26 = +prompt("son kriting")
if(firstNumber26 < secondNumber26 && secondNumber26 % 2 == 0){
    console.log(-1)
}

// ============
// 27-masala:
//  Ikkala son teng bo‘lsa, 100, aks holda -100 chiqarilsin.
let firstNumber27 = +prompt("son kriting")
let secondNumber27 = +prompt("son kriting")
if(firstNumber27 == secondNumber27){
console.log(100)
}else {
console.log(-100)
}

// ============
// 28-masala:
//  Birinchi son 10 va ikkinchi son 5 ga bo‘linadigan bo‘lsa, 50 chiqarilsin.
let firstNumber28 = +prompt("son kriting")
let secondNumber28 = +prompt("son kriting")
if(firstNumber28 % 10 == 0 && secondNumber28 % 5 == 0){
    console.log(50)
}
qwe
// ============
// 29-masala:
// Agar birinchi son ikkinchisidan 2 marta katta bo‘lsa, 2 chiqarilsin.
let firstNumber29 = +prompt("son kriting")
let secondNumber29 = +prompt("son kriting")
if(firstNumber29 * 2 > secondNumber29){
    console.log(2)
}

// ============
// 30-masala:
// Birinchi son ikkinchisidan kichik bo‘lsa va ikkinchi son toq bo‘lsa, -10 chiqarilsin.
let firstNumber30 = +prompt("son kriting")
let secondNumber30 = +prompt("son kriting")
if(firstNumber30 < secondNumber30 && secondNumber30 % 2 == 1){
    console.log(-10)
}

// ============
// 31-masala:
// Son musbat va 3 ga bo‘linadigan bo‘lsa, 3 chiqarilsin, aks holda 0 chiqarilsin.
let firstNumber31 = +prompt("son kriting")
if(firstNumber31 > 0 && firstNumber31 % 3 == 0){
    console.log(0)
}

// ============
// 32-masala:
//  Agar son manfiy va 2 ga bo‘linadigan bo‘lsa, -2 chiqarilsin.
let firstNumber32 = +prompt("son kriting")
if(firstNumber32 < 0 && firstNumber32 %  2 == 0){
    console.log(-2)
}

// ============
// 33-masala:
//  Son musbat va 5 ga bo‘linadigan bo‘lsa, uning 5 ga bo‘linmasidan qolgan qismi chiqarilsin.
let firstNumber33 = +prompt("son kriting")
let rem
if(firstNumber33 > 0 && firstNumber33 % 5 == 0){
    rem = firstNumber33 % 5
}
console.log(rem)
// ============
// 34-masala:
//  Agar son musbat va 10 dan kichik bo‘lsa, uning kvadrati chiqarilsin.
let firstNumber34 = +prompt("son kriting")
if(firstNumber34 > 10 && firstNumber34 > 0){
    console.log(firstNumber34 ** 2)
}

// ============
// 35-masala:
// Son juft yoki 4 ga bo‘linadigan bo‘lsa, 1 chiqarilsin.
let firstNumber35 = +prompt("son kriting")
if(firstNumber35 % 2 == 0 && firstNumber35 % 4 == 0){
    console.log(4)
}


// ============
// 36-masala:
//  Agar son toq va 15 dan katta bo‘lsa, 15 chiqarilsin.
let firstNumber36 = +prompt("son kriting")
if(firstNumber36 % 2 !=0 && firstNumber36 > 15){
    console.log(15)
}


// ============
// 37-masala:
// Son 2 va 3 ga bo‘linadigan bo‘lsa, 6 chiqarilsin, aks holda 1 chiqarilsin.
let firstNumber37 = +prompt("son kriting")
if(firstNumber37 % 2 == 0 && firstNumber37 % 3 == 0){
    console.log(6)
}else {
    console.log(1)
}

// ============
// 38-masala:
//  Agar son musbat va 7 ga bo‘linadigan bo‘lsa, 14 chiqarilsin.
let firstNumber38 = +prompt("son kriting")
if(firstNumber38 > 0 && firstNumber38 % 7 == 0){
    console.log(14)
}


// ============
// 39-masala:
//  Son musbat yoki 0 bo‘lsa, 0 chiqarilsin, aks holda -5 chiqarilsin.
let firstNumber39 = +prompt("son kriting")
if(firstNumber39 == 0) {
    console.log(0)
}

// ============
// 40-masala:
//  Son manfiy va 10 ga bo‘linmaydigan bo‘lsa, -3 chiqarilsin. 
let firstNumber40 = +prompt("son kriting")
if(firstNumber40 < 0 && firstNumber40 % 10 != 0){
    console.log(-3)
}
