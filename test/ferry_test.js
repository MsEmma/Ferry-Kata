var assert = require('assert');
var Car = require('../car')
var Ferry = require('../ferry');

describe('ferry kata', function() {
    var island_ferry = new Ferry(5, 20);
    var blueCar = new car('blue', 14);
    var redCar = new car('red', 7);
    var yellowCar = new car('yellow', 3);

    it('should return 20 for maximum number of people allowed on the ferry', function() {
        var result = island_ferry.maxPeople;
        assert.equal(result, 20);
    });

    it('should return 5 for maximum number of cars allowed on the ferry', function() {
        var result = island_ferry.maxCars;
        assert.equal(result, 5);
    });

    it('should return accepted when board method is called', function() {

        var result = island_ferry.board(blueCar);
        assert.equal(result, 'accepted');
    });

    it('should return accepted when board method is called', function() {
      var island_ferry = new Ferry(5, 20);

        var redCar = new car('red', 7);
        var result = island_ferry.board(redCar);
        assert.equal(island_ferry.carCount(), 1);
        assert.equal(result, 'accepted');
    });

    it('should return rejected when board method is called', function() {
        var result = island_ferry.board(yellowCar);
        assert.equal(result, 'rejected');
    });

    it('should return the car list of the cars on board the ferry', function() {
        var result = island_ferry.cars;
        assert.deepEqual(result, [
          {color: 'blue', passengers: 14 },
          {color: 'red', passengers: 7}]);
    });

    it('should return a map of the car colors and their quantities', function() {
        var result = island_ferry.carColors;
        assert.deepEqual(result, { blue: 1, red: 1 });
    });

    // it('should return car list without the disembarked red car', function() {
    //     island_ferry.disembark(redCar);
    //     var result = island_ferry.cars;
    //     assert.deepEqual(result, [{color: 'blue', passengers: 14 }]);
    // });

    // it('should return 14 after 7 red car passengers have disembarked ', function() {
    //     var result = island_ferry.peopleCount();
    //     assert.equal(result, 14);
    // });
});
