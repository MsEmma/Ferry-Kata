var assert = require('assert');
var Car = require('../car')
var Ferry = require('../ferry');

describe('ferry kata', function() {

    it('should return 20 for maximum number of people allowed on the ferry', function() {
        var island_ferry = new Ferry(5, 20);
        assert.equal(island_ferry.maxPeople, 20);
    });

    it('should return 5 for maximum number of cars allowed on the ferry', function() {
        var island_ferry = new Ferry(5, 20);
        assert.equal(island_ferry.maxCars, 5);
    });

    it('should return accepted when board method is called', function() {
        var island_ferry = new Ferry(5, 20);
        var blueCar = new Car('blue', 4);
        assert.equal(island_ferry.board(blueCar), 'accepted');
    });

    it('should return 1 when car count property is called', function() {
        var island_ferry = new Ferry(5, 10);
        var redCar = new Car('red', 9);
        island_ferry.board(redCar);
        assert.equal(island_ferry.carCount(), 1);
    });

    it('should return rejected when board method is called', function() {
        var island_ferry = new Ferry(5, 20);
        var blueCar = new Car('blue', 7);
        island_ferry.board(blueCar);
        var redCar = new Car('red', 14);
        island_ferry.board(redCar);
        var yellowCar = new Car('yellow', 3);
        assert.equal(island_ferry.board(yellowCar), 'rejected');
    });

    it('should return the car list of the cars on board the ferry', function() {
        var island_ferry = new Ferry(5, 20);
        var blueCar = new Car('blue', 4);
        island_ferry.board(blueCar);
        var redCar = new Car('red', 14);
        island_ferry.board(redCar);
        assert.deepEqual(island_ferry.cars(), [{
            color: 'blue',
            passengers: 4,
            ferry_trips : 1
        }, {
            color: 'red',
            passengers: 14,
            ferry_trips : 1
        }]);
    });

    it('should return a map of the car colors and their quantities', function() {
        var island_ferry = new Ferry(5, 20);
        var blueCar = new Car('blue', 4);
        island_ferry.board(blueCar);
        var redCar = new Car('red', 14);
        island_ferry.board(redCar);
        assert.deepEqual(island_ferry.carColors(), {
            blue: 1,
            red: 1
        });
    });

    it('should return car list without the disembarked red car', function() {
        var island_ferry = new Ferry(5, 20);
        var blueCar = new Car('blue', 4);
        island_ferry.board(blueCar);
        var redCar = new Car('red', 14);
        island_ferry.board(redCar);
        assert.equal(island_ferry.carCount(), 2);
        island_ferry.disembark(redCar);
        assert.equal(island_ferry.carCount(), 1);
        assert.deepEqual(island_ferry.cars(), [{
            color: 'blue',
            passengers: 4,
            ferry_trips : 1
        }]);
    });

    it('should return 4 after red car passengers have disembarked ', function() {
        var island_ferry = new Ferry(5, 20);
        var blueCar = new Car('blue', 4);
        island_ferry.board(blueCar);
        var redCar = new Car('red', 14);
        island_ferry.board(redCar);
        assert.equal(island_ferry.peopleCount(), 18);
        island_ferry.disembark(redCar);
        assert.equal(island_ferry.peopleCount(), 4);
    });

    it("should return 'accepted at half price!' when car boards the ferry after 3 trips", function() {
        var island_ferry = new Ferry(5, 20);
        var blueCar = new Car('blue', 4);
        island_ferry.board(blueCar);
        island_ferry.board(blueCar);
        island_ferry.board(blueCar);
        assert.equal(island_ferry.board(blueCar), 'accepted at half price!');
    });
});
