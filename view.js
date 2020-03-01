//console.log("view") 

class View {
    constructor() {
        //console.log("new view")
        
        this.container = document.getElementById("hello");
        this.heading = document.createElement("H1");
        this.heading.innerHTML = "Planets";                   
        this.container.appendChild(this.heading);  
    }
    
    displayPlanets(planets){ 
        planets.forEach(planet =>{
            this.p = document.createElement("p")
            this.p.innerHTML = planet.name
            this.container.append(this.p) 
            console.log(planet)
        })


    }
}

let planetView = new View();