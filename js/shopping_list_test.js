const expect = chai.expect;
const should = chai.should();
let item;

before(function () {

});

after(function () {

});

beforeEach(function () {

});

afterEach(function () {

});

describe('ShoppingListItem', function () {
  it('Should be a class', function () {
    expect(ShoppingListItem).to.be.a('function');
  });
  it('Should have a property name', function () {
    let apple = new ShoppingListItem('Apple');
    apple.name.should.equal('Apple');
  });
  it('should have a description property', function () {
    let red = new ShoppingListItem("Red");
    red.name.should.equal('Red');
  });
  // it('Should have property description',function () {
  //   expect(item).to.have.property('description');
  //   expect(item.name).to.be('description');
  // })

});