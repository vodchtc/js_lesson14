//1)

class Developer {
    constructor(name, programming_language) {
        this.name = name;
        this.programming_language = programming_language;
    }

    say() {
        console.log(`${this.name} работает с ${this.programming_language}`)
    }
}

class Student extends Developer {
    constructor(name, programming_language, group_number) {
        super(name, programming_language);
        this.group_number = group_number;
    }
}

console.log(new Student('Дамир', 'Java', '5C').say())


//2)

String.prototype.addExclamationMark = function() {
    return this + '!';
}

console.log('22'.addExclamationMark())


//3) 

Number.prototype.dividsonByTwo = function() {
    return this / 2;
}