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
        console.log(this.allPlanets)
    }

//let orderedList = getAllPlanets.....? put function in variable to use in closest planets function

    getAllPlanets(){
        this.allPlanets.sort(function (a, b) {
            return a.order - b.order;
        });    
    }  
    closestPlanets(planets){
        //let planetsList = this.allPlanets.slice(0, 4);
        let planetsList = getAllPlanets.slice(0, 4);
        return planetsList
    }
    
    //filterType(type){
        //  let i=0
        //typePlanets = []
        // while (i < this.allPlanets.length){
            //   let j=1
            // if (type[i] == "Star"){
    //     newArray.push("Star" [j] )
    //   }
    //   i++
    //}       
    //  return typePlanets
    
    //}   
    
}

let planetModel = new Model();

//closestPlanets(getAllPlanets)
console.log(planetModel.closestPlanets())
