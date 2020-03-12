//console.log("model")

class Model {
    constructor() {
        //console.log("new Model");
        this.allPlanets = [
            {
                "name": "Saturn",
                "order": 6,
                "type": "Gas planet",
                "atmospheric_composition": [
                    "H2",
                    "He"
                ],
                "discovery": "Antiquity"
            },
            {
                "name": "Venus",
                "order": 2,
                "type": "Terrestrial planet",
                "atmospheric_composition": [
                    "CO2",
                    "N2",
                    "SO2"
                ],
                "discovery": "Antiquity"
            },
            {
                "name": "Jupiter",
                "order": 5,
                "type": "Gas planet",
                "atmospheric_composition": [
                    "H2",
                    "He"
                ],
                "discovery": "Antiquity"
            },
            {
                "name": "Mars",
                "order": 4,
                "type": "Terrestrial planet",
                "atmospheric_composition": [
                    "CO2",
                    "N2",
                    "Ar"
                ],
                "discovery": "Antiquity"
            },
            {
                "name": "Mercury",
                "order": 1,
                "type": "Terrestrial planet",
                "atmospheric_composition": [
                    "He",
                    "Na+",
                    "P+"
                ],
                "discovery": "Antiquity"
            },
            {
                "name": "Neptune",
                "order": 8,
                "type": "Gas planet",
                "atmospheric_composition": [
                    "H2",
                    "He",
                    "CH4"
                ],
                "discovery": "Urbain Le Verrier, 1846"
            },
            {
                "name": "Earth",
                "order": 3,
                "type": "Terrestrial planet",
                "atmospheric_composition": [
                    "N2",
                    "O2",
                    "Ar",
                    "CO2"
                ],
                "discovery": "Antiquity"
            },
            {
                "name": "Sun",
                "order": 0,
                "type": "Star",
                "atmospheric_composition": [
                    "H",
                    "He",
                    "O",
                    "C",
                    "Fe",
                    "S"
                ],
                "discovery": "Antiquity"
            },
            {
                "name": "Uranus",
                "order": 7,
                "type": "Gas planet",
                "atmospheric_composition": [
                    "H2",
                    "He",
                    "CH4"
                ],
                "discovery": "William Herschel, 1781"
            }
        ]
        
    }
    
    getAllPlanets(){
        this.allPlanets.sort(function (a, b) {
            return a.order - b.order;    
        });
        return this.allPlanets    
    }  
    
    closestPlanets(){
        let planetsList = this.getAllPlanets().slice(1, 5);
        return planetsList
    }
    
    
    filterTypeStar(){
        let typeStar = this.getAllPlanets().filter( planet => planet.type =="Star");
        return typeStar.length //remove length to see items in the array
    }
    
    filterTypeGasPlanet(){
        let typeGasPlanet = this.getAllPlanets().filter( planet => planet.type =="Gas planet");
        return typeGasPlanet.length 
    }
    
    filterTypeTerrestrialPlanet(){
        let typeTerrestrialPlanet = this.getAllPlanets().filter( planet => planet.type =="Terrestrial planet");
        return typeTerrestrialPlanet.length 
    }
    
    typesPlanets(){
        this.typesPlanetsfilter = [
            {"type": "Sun",
            "amount": this.filterTypeStar(),
        },
        {
            "type": "Gas Planet",
            "amount": this.filterTypeGasPlanet(),   
        },
        {
            "type": "Terrestrial Planet",
            "amount": this.filterTypeTerrestrialPlanet(),
        }
    ]  
    return this.typesPlanetsfilter
}

findAtmosphericComposition() {
    let composition = {}
    let sortedComposition
    for (let i = 0; i < this.getAllPlanets().length; i++) {
        this.getAllPlanets()[i].atmospheric_composition.forEach((element) => {
            
            if (composition.hasOwnProperty(element)) {
                composition[element] ++
            } else {
                composition[element] = 1
            } 
        })
        
        sortedComposition = Object.entries(composition).sort(function(a, b) {
            sortedComposition = (b[1] - a[1])
            return sortedComposition
        })
    }
    return sortedComposition
}


removePlanet(){
    this.getAllPlanets().splice(1,1)
    
    return this.getAllPlanets()
}
}

let planetModel = new Model();

console.log(planetModel.getAllPlanets())
console.log(planetModel.closestPlanets())
console.log(planetModel.filterTypeStar())
console.log(planetModel.filterTypeGasPlanet())
console.log(planetModel.filterTypeTerrestrialPlanet())
console.log(planetModel.typesPlanets())
console.log(planetModel.findAtmosphericComposition())
//console.log(planetModel.removePlanet())



