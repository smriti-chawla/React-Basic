/**
 * Created by TTND on 12/27/2016.
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