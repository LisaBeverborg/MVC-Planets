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
        let planetsList = planets.slice(0, 4);
        //let planetsList = getAllPlanets.slice(0, 4);
        return planetsList
    }
    
    
    filterType(type){
        let i=0
        let typePlanets = []
        while (i < this.allPlanets.length){
            let j=1
            if (this.allPlanets[i] == "Star"){
                typePlanets.push("Star")
            }
            i++
        }       
        return typePlanets
        
    } 
    //displayPlanets(){ 
        
        /*  //let planetsList = this.allPlanets.slice(0, 4);
        let planetsList = planets.slice(0, 4);
        return planetsList
        console.log(planets)
        
    }
    */
   
   // planets.forEach(planet =>{
       //    this.p = document.createElement("p")
       //  this.container.append(this.p) 
       //  console.log(planets)
       // })
       // }
    }
    
    let planetView = new View();
    
    console.log(planetView.closestPlanets())
    