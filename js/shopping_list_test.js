const expect = chai.expect;
const should = chai.should();

before(function () {

});

after(function () {
  
});

beforeEach(function () {

});

afterEach(function () {

});

describe('ShoppingListItem',function () {
  it('Should be a class', function () {
    expect(ShoppingListItem).to.be.a('function');
  });
  it('Should have a parameter name', function () {
      let apple = new ShoppingListItem('Apple');
      apple.name.should.equal('Apple');
  });

});