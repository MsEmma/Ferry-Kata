var assert = require('assert');
var car = require('../car')
var Ferry = require('../ferry');

describe('ferry kata', function() {
    var island_ferry = new Ferry(5, 20);

    it('should return 20 for maximum number of people allowed on the ferry', function() {
        var result = island_ferry.maxPeople;
        assert.equal(result, 20);
    });

    it('should return 5 for maximum number of cars allowed on the ferry', function() {
        var result = island_ferry.maxCars;
        assert.equal(result, 5);
    });

    it('should return accepted when board method is called', function() {
        var blueCar = new car('blue', 14);
        var result = island_ferry.board(blueCar);
        assert.equal(result, 'accepted');
    });

    it('should return accepted when board method is called', function() {
        var redCar = new car('red', 7);
        var result = island_ferry.board(redCar);
        assert.equal(result, 'accepted');
    });

    it('should return rejected when board method is called', function() {
        var yellowCar = new car('yellow', 3);
        var result = island_ferry.board(yellowCar);
        assert.equal(result, 'rejected');
    });

    it('should return the cars on board thus far', function() {
        var result = island_ferry.cars;
        assert.deepEqual(result, [
          {color: 'blue', passengers: 14 },
          {color: 'red', passengers: 7}]);
    });
});
