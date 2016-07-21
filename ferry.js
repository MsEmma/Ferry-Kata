module.exports = function(maxCars, maxPeople) {
    var people_count = 0;
    var car_count = 0;
    this.cars = [];
    this.carColors = {};
    this.maxCars = maxCars;
    this.maxPeople = maxPeople;

    this.board = function(car) {

        people_count += car.passengers;
        car_count++;

        if (people_count > this.maxPeople || car_count > this.maxCars) {
            return "rejected";
        } else {
            this.cars.push(car);
            if (!this.carColors.hasOwnProperty(car.color)) {
                this.carColors[car.color] = 1;
            } else {
                this.carColors[car.color]++;
            }
            return "accepted";
        }
    };

    this.disembark = function(car) {

        console.log(car.passengers);
        console.log(people_count);
        people_count -= car.passengers;
        car_count--;

        var carIndex = this.cars.indexOf(car);

        if (carIndex > -1) {
            this.cars.splice(carIndex, 1);
        };
    };

    this.carCount = function(){
      return car_count;
    };

    this.peopleCount = function(){
      return people_count;
    };
};
