class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    //console.log("new Controller")
    
    this.resultAll = this.model.getAllPlanets()
    this.resultClosest = this.model.closestPlanets()
    
    this.view.displayAllPlanets(this.resultAll)
    this.view.displayFourClosest(this.resultClosest)
    //this.type = this.model.filterType()

    //this.result = this.model.closestPlanets()
    //this.view.displayPlanets(this.result)
  }
  /*showFourClosestPlanets = (name) => {
    this.view.displayPlanets(this.result)
  }
  
  */
}



  //planetName = (name) => {
  
  // this.model.closestPlanets(name)
  // this.view.displayPlanets(this.result)
  // }




let planetController = new Controller(planetModel, planetView);