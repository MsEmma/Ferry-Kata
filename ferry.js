module.exports = function(maxCars, maxPeople) {
    var people_count = 0,
        car_count = 0,
        cars = [],
        carColors = {};

    this.maxCars = maxCars;
    this.maxPeople = maxPeople;

    this.board = function(car) {
        if (people_count > this.maxPeople || car_count > this.maxCars) {
            return "rejected";
        } else {
            people_count += car.passengers;
            car_count++;
            cars.push(car);
            if (!carColors.hasOwnProperty(car.color)) {
                carColors[car.color] = 1;
            } else {
                carColors[car.color]++;
            }
            return "accepted";
        }
    };

    this.disembark = function(car) {

        people_count -= car.passengers;
        car_count--;

        var carIndex = cars.indexOf(car);

        if (carIndex > -1) {
            cars.splice(carIndex, 1);
        };
        carColors[car.color]--;
    };

    this.carCount = function() {
        return car_count;
    };

    this.peopleCount = function() {
        return people_count;
    };

    this.cars = function() {
        return cars;
    };

    this.carColors = function() {
        return carColors;
    };
};
