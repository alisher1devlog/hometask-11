/*
Vazifa 1: Kirim va Chiqimlar Uchun Obyekt Strukturasini Yaratish
Maqsad: Xo'jalik kirim va chiqimlarini saqlash uchun obyekt yaratish.
Ishlar:
Expenses nomli obyekt yaratish. Bu obyektning ichida water, gas, electricity kabi xususiyatlar bo'ladi, ularning boshlang'ich qiymatlari 0 ga teng.
Har bir xarajat turiga oid metodlar qo'shiladi, bu metodlar orqali foydalanuvchi o'z xarajatlarini kirita olishi va o'chira olishi mumkin.
Misol:
javascript ``
let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,
    addExpense: function(type, amount) {

    },
    removeExpense: function(type, amount) {

    },
    printMonthlyReport = function() {

	};
};
Vazifa 2: Oylik Hisobotlarni Ko'rsatish
Maqsad: Har bir xarajat turining oylik umumiy summasini hisoblaydi va konsolga chiqaradi.
Ishlar:
Expenses obyektiga printMonthlyReport metodini qo'shish.
Misol:
javascript
    console.log(`Suv uchun oylik xarajat: $${this.water}`);
    console.log(`Gaz uchun oylik xarajat: $${this.gas}`);
    console.log(`Elektr energiyasi uchun oylik xarajat: $${this.electricity}`); */
let expenses = {
    water: 0,
    gas: 0,
    electricity: 0,
    addExpense: function(type, amount) {
        if(type.toLowerCase() === 'water'.toLowerCase()){
            this.water += amount;
            console.log("Miqdorlar qoo'shildi!");
        }else if (type.toLowerCase() === 'gas'.toLowerCase()) {
            this.gas +=amount;
            console.log("Miqdorlar qoo'shildi!");
        }else if(type.toLowerCase() === 'electricity'.toLowerCase()){
            this.electricity += amount;
            console.log("Miqdorlar qo'shildi!");         
        }else{
            console.log("Bunday xususiyat mavjud emas!");
        }
    },
    removeExpense: function(type, amount) {
        if(type.toLowerCase() === 'water'.toLowerCase()){
            this.water -= amount;
            console.log("Miqdorlar qoo'shildi!");
        }else if (type.toLowerCase() === 'gas'.toLowerCase()) {
            this.gas -=amount;
            console.log("Miqdorlar qoo'shildi!");
        }else if(type.toLowerCase() === 'electricity'.toLowerCase()){
            this.electricity -= amount;
            console.log("Miqdorlar qo'shildi!");         
        }else{
            console.log("Bunday xususiyat mavjud emas!");
        }
    },
    printMonthlyReport : function() {
        console.log(`Bizda bor narsalar Water: ${this.water}, Gaz:${this.gas} Electricity: ${this.electricity}`);
        
	}
};

expenses.addExpense("WaTer",2000);
expenses.printMonthlyReport()

