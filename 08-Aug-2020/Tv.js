class TV_Class{
    constructor(brand,price,inches,onoff){
        this.reset = function (){
            this.brand = brand
            this.volume = 50
            this.channel = 1
            this.price = price
            this.inches = inches
            this.onoff = onoff
        }
        this.reset()
    }
    change_volume(action,value){
        if(action==="increase"){
            if(value<=100){
            this.volume = value
            }else{
                console.log("Increase cannot be performed. Volume already above range 0 to 100")
            }
        }else{
            if(value>=0){
                this.volume = value
            }else{
                console.log("Volume decrease cannot be performed. Volume cannot be less than 0")
            }
        }
    }
    
    set_Channel(channel){
        if(channel>50){
            this.channel = 50
            console.log("Channel cannot be more than 50")
        }else{
            this.channel = channel
        }
    }
    
    reset_TV(){
        this.reset()
        console.log("Reset done")
    }
    
    getStatus(){
        console.log(this.brand+" at channel "+this.channel+", volume "+this.volume)
    }
}


var obj1 = new TV_Class("Panasonic","10000","40","on")
obj1.getStatus()
obj1.set_Channel(20)
obj1.getStatus()
obj1.reset_TV()
obj1.getStatus()

class LED_TV  extends TV_Class{
    constructor(){
        super();
        console.log("**** Fron LED_TV ****")
        this.screen_thickness = 4;//inches
        this.energyusage = "91.5 watts";
        this.lifespan = 4;//yrs
        this.refresh_rate = 60;//hz
        //console.log("Hey")
    }
        viewingAngle(){
            console.log("viewingAngle function")
        }
        backlight(){
            console.log("backlight function")
        }
        displayDetails(){
            console.log(this.screen_thickness,this.energyusage,this.lifespan,this.refresh_rate)
        }
}

var obj2 = new LED_TV()
obj2.viewingAngle()
obj2.displayDetails()


class Plasma_TV  extends TV_Class{
    constructor(){
        super();
        console.log("**** Fron Plasma_TV ****")
        this.screen_thickness = 3;//inches
        this.energyusage = "90.5 watts";
        this.lifespan = 3;//yrs
        this.refresh_rate = 70;//hz
        //console.log("Hey")
    }
        viewingAngle(){
            console.log("viewingAngle function")
        }
        backlight(){
            console.log("backlight function")
        }
        displayDetails(){
            console.log(this.screen_thickness,this.energyusage,this.lifespan,this.refresh_rate)
        }
}

var obj3 = new Plasma_TV()
obj3.viewingAngle()
obj3.displayDetails()



