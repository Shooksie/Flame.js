
// class Page {
//   constructor(key) {
//     // a key is the unique way to specify an entry point in a Page
//     // the key will allow us to select from the template for the page, the dom
//     // maniulation point.
//     // for example the template is:
//     //    "<div id='key'></div>"
//     // in this case the div above is all this page has to worry about managing
//     // this page will then once rendered control key and keep track of it and
//     // its children in the dom in the
//     // another example of how key can be used in the template of a Page
//     // assuming we are using bootstrap 4 for some the css styling
//     //  <div class='container'>
//     //  <div class='top-nav'>...insert top nav code here</div>
//     // </div>
//     this.template = '<div></div>'
//     // the template represents the main code for the page,
//   }
// }

class Base {
  constructor(type) {
    this.children = [];
    if (type) {
      this._dom = document.createElement(type);
    }
  }
  _loadefault() {
    return;
  }
  _loadcss(css){ this._dom.style.cssText = css; };
  _getDom(){ return this._dom; };
  addChild(child){this._dom.appendChild(child)}
  setChild(child){
    this.children.push(child);
  }
  renderChildren() {
    for (let child of this.children) {
      this._dom.appendChild(child._getDom());
    }
  }
};


export class Div extends Base {
  constructor () {
    const type="div";
    super(type);
    this._dom.style.cssText = 'flex: 1; background-color: white;'
  }
};

export class Text extends Base {
  constructor () {
    const type="p";
    super(type);
  }
  setValue(value) {
    this._dom.innerText = value;
  }
};

export class Table extends Base {
  constructor () {
    const type="table";
    super(type);
  }
  createHeader() { return; }
};
export class TableHeader extends Base {
  constructor () {
    const type="th";
    super(type);
  }
  createHeader() { return; }
};
export class TableCell extends Base {
  constructor () {
    const type="td";
    super(type);
  }
  createHeader() { return; }
};
export class TableRow extends Base {
  constructor () {
    const type="tr";
    super(type);
  }
};

export class Button extends Base {
  constructor () {
    const type="button";
    super(type);
    this._dom.style.textCss = 'flex: 1, background-color: blue;'
    this._dom.innerHTML = 'click me'
  }

  onClick(handler) {
    this._dom.onclick = handler;
  }
};

export class Component {
  constructor() {
    this._dom = document.createElement('div')
    this._dom.style.cssText = 'display: flex; flex: 1, background-color: black'
  }
  _getDom() { return this._dom;}
  _renderComponent() {
    const obj = this.render();
    this._dom.appendChild(obj._getDom());
    obj.renderChildren();
  }

  render() {
    return;
  }
}
