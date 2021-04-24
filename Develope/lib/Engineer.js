const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub){
        //super gives access to parent constructor
        super(name, id, email, role);
        this.gitHub = gitHub;

    }

    getRole(){
        return this.role;
    }

    getGithub(){
        return this.gitHub;
    }
}

module.exports = Engineer;
