/*Harflar va Raqamlarni Hisoblash
Biror matn qabul qilib, unda nechta harf va raqam borligini hisoblaydigan funksiya yozing. 
Natijani obyekt sifatida qaytaring.

Misol uchun:

countAll("Hello World") ➞ { "HARFLAR":  10, "RAQAMLAR": 0 }
countAll("H3ll0 Wor1d") ➞ { "HARFLAR":  7, "RAQAMLAR": 3 }
countAll("149990") ➞ { "HARFLAR": 0, "RAQAMLAR": 6 } */



function countAll(str){
    
    let countNum = 0;
    let countLetter = 0;
    for (let char of str) {
        if (/[0-9]/.test(char)) {
            countNum++;
        } else if (/[a-zA-Z]/.test(char)) {
            countLetter++;
        }
    }
    
    return {HARFLAR: countLetter, RAQAMLAR: countNum};
}

console.log(countAll("Hello World"));

