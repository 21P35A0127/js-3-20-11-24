// Question 1

class book {
    title;
    author;
    isbn;

    constructor(title, author, isbn) 
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    checkout() {
        console.log(this.title, "book is checked out");
    }

    returned() {
        console.log(this.title, "book is returned");
    }

    updatetitle() {
        console.log(this.title, "title is changed");
    }
}

var jimmy=new book("kalyani", "charlie", "777");
jimmy.checkout();
jimmy.returned();
jimmy.updatetitle();
console.log(jimmy)   

// Question 2

class product {
    name;
    price;
    category;

    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applydiscount(amount) {
        console.log(amount, "applydiscount");
    }

    afterdiscount() {
        console.log(this.price-100, "getpriceafterdiscount");
    }

}

var shampoo = new product("dove", "500", "hairwash");
shampoo.applydiscount(100);
shampoo.afterdiscount(100);
console.log(shampoo);

// Question 3

class bankaccount {
    accountHolderName;
    accountNumber;
    balance;

    constructor(accountHolderName, accountNumber, balance) {
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    depositmoney(money) {
        console.log(money, "deposited amount");
    }

    withdrawmoney(money) {
        console.log(money, "amount withdrawed");
    }

    currentbalance() {
        console.log(this.balance, "total balance");
    }
}

var SBI = new bankaccount("kalyani", "xxxxx234", "5000")
SBI.depositmoney(2000);
SBI.withdrawmoney(1000);
SBI.currentbalance();
console.log(SBI);

//Question 4

class Vehicle {
    model;
    licensePlate;
    mileage;

    constructor(model, licensePlate, mileage) {
        this.model = model;
        this.licensePlate = licensePlate;
        this.mileage = mileage;
    }

    drivemiles() {
        console.log(this.mileage, "increases the mileage")
    }
    getmileage(){
        console.log(this.mileage, "current mileage")
    }
}

var bike = new Vehicle("tessa", "ap1432", "45");
bike.drivemiles("25");
bike.getmileage();
console.log(bike)

// Question 5

class Student {
    name;
    grade;

    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    setgrade() {
        console.log(this.grade, "newgrade is updated")
    }

    getgrade() {
        console.log(this.name, "current grade", this.grade)
    }
}

var student = new Student("MLK", "A");
student.setgrade("A+");
student.getgrade();
console.log(student)

