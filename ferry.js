module.exports = function(maxCars, maxPeople) {
    var people_count = 0,
        car_count = 0,
        cars = [],
        carColors = {},
        ferry_trips = 0;

    this.maxCars = maxCars;
    this.maxPeople = maxPeople;

    this.board = function(car) {
        if (people_count > this.maxPeople || car_count > this.maxCars) {
            return "rejected";
        } else {
            people_count += car.passengers;
            car_count++;
            cars.push(car);
            ferry_trips++;
            car.total_ferry_trips++;

            if (!carColors.hasOwnProperty(car.color)) {
                carColors[car.color] = 1;
            } else {
                carColors[car.color]++;
            };

            if (ferry_trips !== 0 && ferry_trips > 3  && ferry_trips < 7) {
                return 'accepted, half price!';

            } else if (car.total_ferry_trips !== 0 && car.total_ferry_trips > 7) {
                ferry_trips = 0;
                car.total_ferry_trips = 0;
                return 'accepted, you go free!';
            };
            return "accepted";
        };
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
