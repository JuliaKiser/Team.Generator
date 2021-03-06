const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        //super gives access to parent constructor
        super(name, id, email);
        this.gitHub = gitHub;

    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.gitHub;
    }
}

module.exports = Engineer;
