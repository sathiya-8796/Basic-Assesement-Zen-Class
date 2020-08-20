class Circle{
    constructor(radius,color){
        this.radius = radius
        this.color = color
        if(this.radius===undefined && this.color===undefined){
            console.log("Radius & Color not defined")
        }else if(this.color===undefined){
            console.log("Color is not defined")
        }else if(this.radius===undefined){
            console.log("Radius is not defined")
        }else{
            console.log("Both Defined")
        }
    }
    getRadius(){
        console.log(this.radius) 
        return this.radius
    }    
    
    getColor(){
        console.log(this.color) 
        return this.color
    }
    
    setRadius(Rad){
        if(Rad !== undefined){
            this.radius = Rad
        }
    }
    setColor(Color){
        if(Color !== undefined){
            this.color = Color
        }
    }    
    
    getArea(){
       console.log(Math.pow(this.radius,2) * 3.14)    
       return Math.pow(this.radius,2) * 3.14
    }
    
}

let obj = new Circle()
let radius = obj.getRadius()
obj.setRadius(4)
obj.setColor("Red")
let after_rad = obj.getRadius()
obj.getArea()

// constructor
let obj1 = new Circle()
let obj2 = new Circle(4)
let obj3 = new Circle(3,4)
let obj4 = new Circle(undefined,4)


