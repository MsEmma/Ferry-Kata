module.exports = function(maxCars, maxPeople) {
    var people_count = 0;
    var car_count = 0;
    this.cars = [];

    this.maxCars = maxCars;
    this.maxPeople = maxPeople;

    this.board = function(car) {

        this.cars.forEach(function(car) {
            people_count += car.passengers;
            car_count++;
        });

        if (people_count > this.maxPeople || car_count > this.maxCars) {
            return "rejected";
        } else {
            this.cars.push(car);
            return "accepted";
        }
    };
};
