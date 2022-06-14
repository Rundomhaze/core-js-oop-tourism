class Agency {
  constructor(money, tours = []) {
    this.money = money;
    this.tours = tours;
  }

  availableToursCount() {
    return this.tours.length;
  }

  findTour(countryName) {
    return this.tours.filter((el) => el.country == countryName)[0];

  }

  sell(countryName) {
    this.tours.find((el, i) => {
      if (el.country === countryName) {
        this.tours.splice(i, 1);
        this.money += el.price;
      }
    });
  }
}

module.exports = Agency;
