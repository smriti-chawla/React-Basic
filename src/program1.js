/**
 * Created by TTND on 12/27/2016.
 * Create a class Student having two fields name and roll number and a method to print the student detail. Create two objects of the class and use display method to print the user detail. perform the above tast using ES6
 */
class Student {
    constructor (name, rollno) {
        this.name = name,
            this.rollno = rollno
    }

    print() {
         return "hi your name is " + this.name + " and roll no " + this.rollno
    }
}
let a = new Student('smriti',12);
let b=new Student ('chawla',13);

console.log(a.print());
console.log(b.print());