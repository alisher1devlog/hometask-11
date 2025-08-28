/*1.
To-Do List Loyihasi Tavsifi
Obyekt yondashuvi: Biz to-do ro'yxatini boshqarish uchun obyekt yaratamiz. 
Bu obyekt ro'yxat elementlarini saqlash, yangi vazifa qo'shish, vazifa o'chirish va ro'yxatni konsol 
orqali ko'rish kabi metodlarga ega bo'lsin.
Metodlar:
addTask(task): Yangi vazifani ro'yxatga qo'shadi.
removeTask(id): Berilgan indeksdagi vazifani o'chiradi.
printTasks(): Barcha vazifalarni konsolga chiqaradi */

let todo = {
  tasks: [],        
  nextId: 1,       
  addTask(task) {
    this.tasks.push({ id: this.nextId, task: task });
    this.nextId++; 
  },
  removeTask(id) {
    this.tasks = this.tasks.filter(item => item.id !== id);
  },
  printTasks() {
    console.log("Vazifalar ro'yxati:");
    this.tasks.forEach(item => {
      console.log(`${item.id}. ${item.task}`);
    });
  }
};
todo.addTask("Kitob o'qish");
todo.addTask("Sport bilan shug'ullanish");
todo.addTask("Kod yozish");

todo.printTasks();

todo.removeTask(2); 

todo.printTasks();

