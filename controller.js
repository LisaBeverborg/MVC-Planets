class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    //console.log("new Controller")
    
    this.result = this.model.closestPlanets()
    this.view.closestPlanets(this.result)
    
    this.allTypes = this.model.typesPlanets
    this.view.typePlanets(this.allTypes)
  }
  
  showLists = () => {
    this.view.closestPlanets(this.result)
    this.view.typePlanets(this.allTypes)
  }
}

let planetController = new Controller(planetModel, planetView);