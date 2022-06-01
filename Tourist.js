class Tourist {
  constructor(name, age, tours = []) {
    this.name = name;
    this.age = age;
    this.tours = tours;
  }

  buy(countryName, agency) {
    agency.tours.forEach(element => {
      if (element.country === countryName) {
        this.tours.push(element)
      }
    });
    return true;
  }
}

module.exports = Tourist;
