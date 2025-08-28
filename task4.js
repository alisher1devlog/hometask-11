/**Memorial Day uchun xarid qilish!
Har bir narsa uchun qo'llaniladigan 6% soliqni hisobga olgan holda, 
sotib olingan mahsulotlar soniga ko'ra jami narxni hisoblovchi funksiya yarating. Misollar:

checkout([
  { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
  { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
  { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
]) ➞ 15.3
Bu funksiya, sotib olingan mahsulotlarning har birining miqdori va narxi ko'rsatilgan ro'yxatni qabul qiladi va ularning umumiy qiymatini hisoblaydi. 
Agar mahsulot soliqqa tortiladigan bo'lsa, uning narxiga 6% soliq qo'shiladi. */

function checkout(arr){
    let summa = 0;
    for(let i of arr){
        if (i.taxable) {
            summa = summa + i.prc * i.qty * 1.06;
        }else{
            summa = summa + i.prc * i.qty;
        }
    }
    return summa;
}

console.log(checkout([
  { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
  { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
  { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
]));
