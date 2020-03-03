//console.log("view") 

class View {
    constructor() {
        //console.log("new view")
        
        this.container = document.getElementById("hello");
        this.heading = document.createElement("H1");
        this.heading.innerHTML = "Planets";                   
        this.container.appendChild(this.heading);  
    }
    
    displayPlanets(){ 

      /*  //let planetsList = this.allPlanets.slice(0, 4);
        let planetsList = planets.slice(0, 4);
        return planetsList
        console.log(planets)
    
    */
    }
    
    // planets.forEach(planet =>{
        //    this.p = document.createElement("p")
        //  this.container.append(this.p) 
        //  console.log(planets)
        // })
        // }
    }
    
    let planetView = new View();
