class calculator{
    constructor(num1,num2){
        this.num1 = num1
        this.num2 = num2
    }
    add(){
        console.log("Sum is ",this.num1+this.num2)
        return this.num1+this.num2
    }
    sub(){
        console.log("Difference is ",this.num1-this.num2)
        return this.num1-this.num2        
    }
    mul(){
        console.log("Product is ",this.num1*this.num2)
        return this.num1*this.num2
    }
    div(){
        console.log("Quotient is ",this.num1/this.num2)
        return this.num1/this.num2
    }
}
let calcobj = new calculator(10,8)
let add_val = calcobj.add()
let sub_val = calcobj.sub()
let mul_val = calcobj.mul()
let div_val = calcobj.div()
