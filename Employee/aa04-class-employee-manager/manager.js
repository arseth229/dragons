const Employee = require ('./employee')

class Manager extends Employee {
    constructor (name, salary, title, manager, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee) {
        let list = this.employees;
        list.push(employee);
    }
    calculateBonus(multiplier){
        // let sum = 0;
        const totalSub = this.totalSubSalary(this.employees, 0);




        return (this.salary + totalSub)* multiplier
    }

    totalSubSalary(thisEmployee, sum){
        // let sum = 0;
        if(!thisEmployee.length){return sum};

        if(thisEmployee[0] instanceof Manager){
            thisEmployee[0].calculateBonus();

        } else {
            sum+= thisEmployee[0].salary
            return this.totalSubSalary(...thisEmployee.slice(1), sum)
        }





    }
}


// const splinter = new Manager('Splinter', 100000, 'Sensei');
// const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
// const raph = new Manager('Raphael', 90000, 'Ninja', leo);
// const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
// const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

// console.log(splinter.calculateBonus(0.05)); // => 22500
// console.log(leo.calculateBonus(0.05)); // => 17500
// console.log(raph.calculateBonus(0.05)); // => 13000

module.exports = Manager;
//    for (let i = 0; i < this.employees.length; i++) {
//             const ele = this.employees[i];
//             sum += ele.salary

//         }
