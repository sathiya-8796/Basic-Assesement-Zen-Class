class Bank{
    constructor(){
        this.code = "code"
        this.adddress = "address"
        this.Account = []
        this.ATM;
    }
    manages(){
        
    }
    maintains(){
        
    }
}

class Customer{
    constructor(){
        this.name = "name"
        this.age = "age"
        this.addr = "addr"
        this.dob = "dob"
        this.Account = [] //length 2
    }
    
    setAccount(AccObj){
        if(this.Account.length<=2){
            this.Account.push(AccObj)
        }
    }
    verifyPwd(){
        
    }

   withdraw(ATMObj){

}
}

class Account{
    constructor(){
    this.number = ""
    this.balance = "bal"
    }
    deposit(){
        
    }
    withdraw(){
        
    }
    createTransaction(){
        
    }
    
}

class ATM{
    constructor(){
        this.location =""
        this.managedby = ""
        this.Customer = CustObj
    }
    
}

class ATM_Transactions{
    constructor(){
        this.transactionid = ""
        this.date = ""
        this.type = ""
        this.amount = ""
        this.postbal = ""
    }
    modifies(){
        
    }
}

class current_acc extends Account{
    constructor(){
    this.acc_no = ""
    this.balance = ""}
    withdraw(){
        
    }
    
}

class savings_acc extends Account{
    constructor(){
    this.acc_no = ""
    this.balance = ""
    }
    
}




