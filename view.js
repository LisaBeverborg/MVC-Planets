//console.log("view") 

class View {
    constructor() {
        //console.log("new view")
        
        this.container = document.getElementById("hello");
        this.heading = document.createElement("H1");
        this.heading.innerHTML = "Planets";                   
        this.container.appendChild(this.heading);  
        
        this.subheading = document.createElement("H2");
        this.subheading.innerHTML = "Planets closest to the sun";                   
        this.container.appendChild(this.subheading);  
    }
    
    closestPlanets(planets){ 
        planets.forEach(planet =>{
            this.closestPlanetList = document.getElementById("listClosest");
            this.pPlanet = document.createElement("p")
            this.pPlanet.innerHTML = planet.name
            this.closestPlanetList.append(this.pPlanet)   
        })
    }
    
    typePlanets(types){ 
        this.typeList = document.getElementById("listType");
        this.headingType = document.createElement("H2");
        this.headingType.innerHTML = "Types of planets";                   
        this.typeList.appendChild(this.headingType);  
        types.forEach(type =>{
            this.planetType = document.createElement("p")
            this.planetType.innerHTML = type.type +" " + type.amount
            this.typeList.append(this.planetType)
        })
    }
}

let planetView = new View();


