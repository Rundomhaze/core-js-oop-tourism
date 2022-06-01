const Tourist = require('./Tourist');
const Tour = require('./Tour');
const Agency = require('./Agency');

let turkey; let egypt; let india; let thailand; let agency;
const max = new Tourist('Max', 32);
const helen = new Tourist('Helen', 28);


turkey = new Tour('Turkey', 70000);
egypt = new Tour('Egypt', 85000);
india = new Tour('India', 100000);
thailand = new Tour('Thailand', 105000);
agency = new Agency(50000, [turkey, egypt, india, thailand]);



agency.sell('Thailand')
//max.buy('Thailand')


console.log(agency);



//tours[i].country === countryName)
//console.log(agency.tours);


//console.log(agency.findTour('Egypt'));
