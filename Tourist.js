class Tourist {
  constructor(name, age, tours = []) {
    this.name = name;
    this.age = age;
    this.tours = tours
  }

  buy(countryName, agency) {
    agency.tours.forEach(el => {
      if(el.country === countryName){
        this.tours.push(el);        
      }      
    });
    const tour = agency.findTour(countryName)
    if(tour) {
      return true;
    } return false;
  }
}

module.exports = Tourist;
