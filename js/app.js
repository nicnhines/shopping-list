class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = " ";
    this.is_done = false;
    }
    check(){
      return this.is_done = true;

    }

    unCheck(){
      return this.is_done = false;

    }
    render(){
      return `$<li>`;

    }
};