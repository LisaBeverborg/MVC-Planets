class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    //console.log("new Controller")
    
    this.result = this.model.getAllPlanets()
   // this.view.displayPlanets(this.result)
    //this.type = this.model.filterType()
  }
  
  //planetName = (name) => {
    
   // this.model.closestPlanets(name)
   // this.view.displayPlanets(this.result)
 // }
}



let planetController = new Controller(planetModel, planetView);