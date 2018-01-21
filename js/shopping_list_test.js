const expect = chai.expect;
const should = chai.should();
let sandbox;

// beforeEach(function(){
//   sandbox = sinon.sandbox.create();

// });
// afterEach(function() {
//   sandbox.restore();
// });
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
  it('Should have constructor with name parameter', function () {
    let sho = new ShoppingListItem
    expect(sho).to.have.constructor('name','description');
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


    it('Should return a string', function () {
      let shoppingNow = new ShoppingListItem('apple', 'red');
      expect(shoppingNow.render()).to.equal(`<li class="completed_false"><span>apple</span><span>red</span></li>`);
    });
  });
});

let arr;
describe('ShoppingList', function () {
  it('Should be a class', function () {
    expect(ShoppingList).to.be.a('function');
  });
  it('Should have a items property', function () {
    let item = new ShoppingList;
    expect(item).to.have.property('items');
  });
  it('Item should be an array', function () {
    let item = new ShoppingList();
    expect(item.items).to.be.an('Array');
    describe('addItem', function () {
      it('Should be a method', function () {
        expect(item.addItem).to.be.a('function');
      });
      it('Should invoke addItem by passing ShoppingListItem into items', function () {
        let apple = new ShoppingListItem('apple', 'red');
        let banana = new ShoppingListItem('banana', 'yellow');
        let orange = new ShoppingListItem('orange', 'orange');
        item.addItem(apple);
        item.addItem(banana);
        item.addItem(orange);
        expect(item.items).to.contain(apple, banana, orange);
      });
      it('Should throw error if adding item that is not in ShoppingListItem', function () {
        
        // expect(item.addItem.bind(item,'z')).to.throw('Item not in shoppingList')
        // expect(item.addItem.bind(item,'z')).to.throw(new Error('Item not in shoppingList'))nu
        expect(item.addItem.bind(item,'z')).to.throw('item')
      });
    });
    describe('removeItem', function () {
      it('Should be a method', function () {
        expect(item.removeItem).to.be.a('function');
      });
      it('Should invoke removeItem by removing items ShoppingListItem ', function () {
        let apple = new ShoppingListItem('apple', 'red');
        let banana = new ShoppingListItem('banana', 'yellow');
        let orange = new ShoppingListItem('orange', 'orange');
        item.removeItem(apple);
        item.removeItem(banana);
        item.removeItem(orange);
        expect(item.items).to.not.contain(apple, banana, orange);
      });
      it('Should throw error if removing item that is not in ShoppingListItem', function () {
        expect(item.removeItem.bind(item,'z')).to.throw('item')
      });
    });
    describe('render', function () {
      
      it('Should return a string', function () {
        let item = new ShoppingListItem('apple', 'red');
        //expect(item.render()).to.equal(`$<ul>`);
        
      });
      
    });
  });

});