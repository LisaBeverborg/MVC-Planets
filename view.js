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
        
        this.typeList = document.getElementById("listType");
        this.headingType = document.createElement("H2");
        this.headingType.innerHTML = "Types of planets";                   
        this.typeList.appendChild(this.headingType);  
        
        this.compositionList = document.getElementById("listComposition");
        this.headingComposition = document.createElement("H2");
        this.headingComposition.innerHTML = "Composition";                   
        this.compositionList.appendChild(this.headingComposition);  

        this.removebtn = document.createElement("button")
        this.removebtn.innerHTML = "Remove";
        this.container.append(this.removebtn)
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
        types.forEach(type =>{
            this.planetType = document.createElement("p")
            this.planetType.innerHTML = type.type +" " + type.amount
            this.typeList.append(this.planetType)
        })
    }
    
    compositionPlanets(composition){
        for (let i = 0; i < 3; i++) {
            //compositions.forEach(composition =>{
            this.planetComposition = document.createElement("p")
            this.planetComposition.innerHTML = composition[i]
            this.compositionList.append(this.planetComposition)
            //})
            
        }
    }
    clearList(){
        let element = document.querySelectorAll("p")
        for( let i= 0; i < element.length; i++){
            element[i].remove()
        }
    }
    
    removeFirstPlanet(handler){
        this.removebtn.addEventListener("click", handler)
     
    }
}

let planetView = new View();


