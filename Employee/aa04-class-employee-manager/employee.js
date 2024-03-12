class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name; 
        this.salary = salary;
        this.title = title; 
        this.manager = manager;
        if (manager !== null) {
            manager.addEmployee(this);
        }
    }



}

const jim = new Employee (
    'jim',
    2, 
    'bro',
    manager = 'splinter'
)

module.exports = Employee;