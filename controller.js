class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    //console.log("new Controller")
    
    this.result = this.model.getAllPlanets()
    this.resultPlanets = this.model.closestPlanets()
    this.view.displayPlanets(this.result)
  }
  
  planetName = (name) => {
    
    this.model.closestPlanets(name)
    this.view.displayPlanets(this.resultPlanets)
  }
}



let planetController = new Controller(planetModel, planetView);