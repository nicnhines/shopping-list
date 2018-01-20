const expect = chai.expect;
const should = chai.should();
let item;

describe('ShoppingListItem', function () {
  it('Should be a class', function () {
    expect(ShoppingListItem).to.be.a('function');

  });
  it('Should have a name property', function () {
    let apple = new ShoppingListItem('Apple');
    apple.name.should.equal('Apple');
  });
  it('should have a description property', function () {
    let red = new ShoppingListItem("Red");
    red.name.should.equal('Red');
  });
  it('should have a is_done property', function () {
    let done = new ShoppingListItem(true);
    done.name.should.equal(true);
  });
  it('should have a name argument', function () {
    let item = new ShoppingListItem("item");
    item.name.should.equal("item");
  });
  it('Should have constructor', function () {
    expect(ShoppingListItem).to.be.a('function');
  });
  describe('check', function () {
    it('Should have check method', function () {
      let shopping = new ShoppingListItem("apple", "red")
      expect(shopping.check()).to.equal(true);
    });
  });
  describe('unCheck', function () {
    it('Should have unCheck method', function () {
      let preshopping = new ShoppingListItem("apple", "red")
      expect(preshopping.unCheck()).to.equal(false);

    });
  });
  describe('render', function () {
    it('Should have render method', function () {
      let shoppingNow = new ShoppingListItem;
      expect(shoppingNow.render()).to.equal(`$<li>`);

    });
  });
});