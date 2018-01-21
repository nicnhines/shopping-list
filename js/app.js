class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }
  check() {
    return this.is_done = true;

  }

  unCheck() {
    return this.is_done = false;

  }
  render() {
    return `<li class="completed_${this.is_done}"><span>${this.name}</span><span>${this.description}</span></li>`;

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
  removeItem(item) {
    if (item instanceof ShoppingListItem) {
      this.items.pop(item);
      
    }else{
      throw new Error('item');
    }
  };

  render() {
    let ul = `<ul>`;
    let closeUl = `</ul>`;
    for(let i = 0; i < items.length; i++) {
      let rendered = items[i].render();
      console.log(rendered);
    }

    return  ul + ' ' + rendered + ' ' + closeUl ;
  }
};