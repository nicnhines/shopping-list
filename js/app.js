class ShoppingListItem {
  constructor(name, descripton) {
    this.name = name;
    this.description = ' ';
    this.is_done = false;
  }
  check() {
    return this.is_done = true;

  }

  unCheck() {
    return this.is_done = false;

  }
  render() {
    return `$<li>`;

  }
};

class ShoppingList {
  constructor(items) {
    this.items = [];
  }
  addItem(item) {
    if (item instanceof ShoppingListItem) {
      this.items.push(item);
      
    }else{
      throw new Error('item');
    }
  };
};