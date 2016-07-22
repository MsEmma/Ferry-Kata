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
            total_ferry_trips : 1
        }, {
            color: 'red',
            passengers: 14,
            total_ferry_trips : 1
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
            total_ferry_trips : 1
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

    it("should return 'accepted, half price!' when car boards the ferry after 3 trips", function() {
        var island_ferry = new Ferry(5, 20);
        var blueCar = new Car('blue', 4);
        island_ferry.board(blueCar);
        island_ferry.board(blueCar);
        island_ferry.board(blueCar);
        assert.equal(island_ferry.board(blueCar), 'accepted, half price!');
    });

    it("should return 'accepted, you go free!' when car boards any ferry after 7 trips", function() {
        var island_ferry = new Ferry(10, 20);
        var orangeCar = new Car('orange', 2);
        island_ferry.board(orangeCar);
        island_ferry.board(orangeCar);
        island_ferry.board(orangeCar);
        island_ferry.board(orangeCar);
        island_ferry.board(orangeCar);
        island_ferry.board(orangeCar);
        island_ferry.board(orangeCar);
        assert.equal(island_ferry.board(orangeCar), 'accepted, you go free!');
    });

    it("should return 'accepted, you go free!' when car boards any ferry after 7 trips", function() {
        var island_ferry = new Ferry(10, 30);
        var north_island_ferry = new Ferry (4, 10);
        var south_island_ferry = new Ferry(5, 20);
        var orangeCar = new Car('orange', 2);
        island_ferry.board(orangeCar);
        south_island_ferry.board(orangeCar);
        island_ferry.board(orangeCar);
        island_ferry.board(orangeCar);
        north_island_ferry.board(orangeCar);
        island_ferry.board(orangeCar);
        south_island_ferry.board(orangeCar);
        assert.equal(north_island_ferry.board(orangeCar), 'accepted, you go free!');
    });
});
