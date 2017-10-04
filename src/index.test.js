let expect = require('chai').expect;
let starWars = require('./index');

describe('starWars-names', function() {
  it('should be array of strings', function() {
    expect(starWars.all).to.satisfy(isArrayOfStrings);

    function isArrayOfStrings(array) {
      return array.every(function(item) {
        return typeof item === 'string';
      });
    }
  });

  it('should be Ben Skywalker', function() {
    expect(starWars.all).to.include('Ben Skywalker');
  });
});
