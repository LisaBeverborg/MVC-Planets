class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    //console.log("new Controller")
    this.firstList()
  }
  
  firstList = () => {
    this.view.removeFirstPlanet( this.showRemoveFirstPlanet)
    this.showLists()
  }
  
  showRemoveFirstPlanet = (handler) =>{
    this.button = this.model.removePlanet()
    this.view.clearList()
    this.showLists()
    
  }
  showLists = () => {
    this.result = this.model.closestPlanets()
    this.view.closestPlanets(this.result)
    
    this.allTypes = this.model.typesPlanets()
    this.view.typePlanets(this.allTypes)
    
    this.allComposition = this.model.findAtmosphericComposition()
    this.view.compositionPlanets(this.allComposition)
  }
}


let planetController = new Controller(planetModel, planetView);