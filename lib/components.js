
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
  constructor(type, obj) {
    this._dom = document.createElement(type);
    if (obj) {
      this.children = obj.children ? obj.children: [];
      if (obj.style) {
        this.style = obj.style;
      }
    } else {
      this.children = [];
    }
  }
  _loadefault() {
    return;
  }
  loadcss(css) {
    for (let key in css) {
      this._dom.style[key] = css[key];
    }
    return this;
  };
  _setState(state) {this.state = state;}
  _getDom() { return this._dom; };
  setChild(child){
    this.children.push(child);
    return this;
  }
  renderWithChildren() {
    let fragment = document.createDocumentFragment();
    fragment.appendChild(this._dom);
    this.loadcss(this.style);
    for (let child of this.children) {
      if (child) {
        this._dom.appendChild(child.renderWithChildren());
      }
    }
    return fragment;
  }
};


export class Div extends Base {
  constructor (obj) {
    const type="div";
    super(type, obj);
    const style = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    };
    this.loadcss(style);
  }
};



export class p extends Base {
  constructor (value, obj) {
    if (obj && obj.type) {
      const type = obj.type;
      super(type, obj);
    } else {
      const type = 'p';
      super(type);
    }
    if (value) {
      this.setValue(value);
    }

  }
  setValue(value) {
    this._dom.innerText = value;
  }
};

export class h1 extends p {
  constructor(value, obj) {
    if (obj) {
      obj.type = 'H1'
      super(obj);
    } else {
      let obj = {type: 'H1'}
      super(obj)
    }

  }
};

export class Table extends Base {
  constructor (obj) {
    const type="table";
    super(type, obj);
  }
  createHeader() { return; }
};


export class TableHeader extends Base {
  constructor (obj) {
    const type="th";
    super(type, obj);
  }
  createHeader() { return; }
};


export class TableCell extends Base {
  constructor (obj) {
    const type="td";
    super(type, obj);
  }
  createHeader() { return; }
};


export class TableRow extends Base {
  constructor (obj) {
    const type="tr";
    super(type, obj);
  }
};


export class Button extends Base {
  constructor (obj) {
    const type="button";
    super(type, obj);
    if (obj && obj.value) {
      this._dom.innerHTML = obj.value;
    } else {
      this._dom.innerHTML = 'Click me';
    }
  }

  onClick(handler) {
    this._dom.onclick = handler;
  }
};


export class Component {
  constructor () {
    this._dom = document.createDocumentFragment();
  }
  getDom() { return this._dom;}
  renderWithChildren() {
    const obj = this.render();
    this._dom.appendChild(obj.renderWithChildren());
    return this._dom;
  }

  render() {
    return this._dom;
  }
}
