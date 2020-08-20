class Movie{
    constructor(Title,Studio,Rating="PG"){
        this.Title = Title
        this.Studio = Studio
        this.Rating = Rating
    }
    
    getPG(Arr){
        let filtered_val = Arr.filter((val)=>val.Rating==="PG")
        console.log(filtered_val)
        return filtered_val
    }
}

let obj1 = new Movie("Casino Royale_1","Eon Productions_1","PG13")
let obj2 = new Movie("Casino Royale_2","Eon Productions_2")
let obj3 = new Movie("Casino Royale_3","Eon Productions_3")
let obj4 = new Movie("Casino Royale_4","Eon Productions_4","PG13")
let obj5 = new Movie("Casino Royale_5","Eon Productions_5")
let obj6 = new Movie("Casino Royale_6","Eon Productions_6","PG13")
let filval = obj1.getPG([obj1,obj2,obj3,obj4,obj5,obj6])

