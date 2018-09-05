
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
const Styles = {
  Row: {
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid',
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
  },
  FullHeight: {
    height: '100%',
    flex: 1,
  },
};

class Base {
  constructor(type, obj) {
    this._dom = document.createElement(type);
    if (obj) {
      this.children = obj.children ? obj.children : [];
      if (obj.style) {
        this.style = obj.style;
      }
      if (obj.class) {
        this._dom.className = obj.class;
      }
    } else {
      this.children = [];
    }
  }

  _loadefault() {
    return this;
  }

  loadcss(css) {
    if (css) {
      for (const key in css) {
        this._dom.style[key] = css[key];
      }
    }
    return this;
  }

  _setState(state) { this.state = state; }

  _getDom() { return this._dom; }

  setChild(child) {
    this.children.push(child);
    return this;
  }

  renderWithChildren() {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(this._dom);
    this.loadcss(this.style);
    this.children.forEach((child) => {
      if (child) {
        this._dom.appendChild(child.renderWithChildren());
      }
    });

    return fragment;
  }
}


class _div extends Base {
  constructor(obj) {
    const type = 'div';
    super(type, obj);
    const style = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    };
    // this.loadcss(Object.assign(style, (obj.style || {})));
  }
}
export const Div = obj => (new _div(obj));


class _p extends Base {
  constructor(obj) {
    if (obj && obj.type) {
      const { type } = obj;
      super(type, obj);
    } else {
      const type = 'p';
      super(type);
    }
  }

  setValue(value) {
    this._dom.innerText = value;
  }
}
export const p = (value, obj) => (new _p(value, obj));

class _h1 extends _p {
  constructor(obj) {
    const newobj = obj || {};
    newobj.type = 'h1';
    super(newobj);
  }
}

class _table extends Base {
  constructor(obj) {
    const type = 'table';
    super(type, obj);
  }

  createHeader() { return this; }
}

export const h1 = (value, obj) => (new _h1(value, obj));

class _th extends Base {
  constructor(obj) {
    const type = 'th';
    super(type, obj);
  }

  createHeader() { return this; }
}
export const th = obj => (new _th(obj));

class _td extends Base {
  constructor(obj) {
    const type = 'td';
    super(type, obj);
  }
}

export const table = obj => (new _table(obj));

class _tr extends Base {
  constructor(obj) {
    const type = 'tr';
    super(type, obj);
  }
}
export const td = obj => (new _td(obj));
export const tr = obj => (new _tr(obj));

class _btn extends Base {
  constructor(obj) {
    const type = 'button';
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
}

export const Button = obj => (new _btn(obj));


export class Component {
  constructor() {
    this._dom = document.createDocumentFragment();
  }

  clearDom() {
    this._dom.deleteContents();
  }

  addChild(child) {
    this._dom.appendChild(child);
  }

  getDom() { return this._dom; }

  renderWithChildren() {
    const obj = this.render();
    this._dom.appendChild(obj.renderWithChildren());
    return this._dom;
  }

  render() {
    return this._dom;
  }
}

class _sidebar extends Component {
  constructor(args) {
    super();
    this.args = args;
  }


  renderButtons(list) {
    const children = [];
    list.forEach((value) => {
      children.push((new Button({ value: value.title })));
    });
    this.children = children;
  }


  render() {
    this.renderButtons();
    return (Div({
      children: this.children,
      style: Styles.FullHeight,
    }));
  }
}

class _Page extends Component {
  constructor(args) {
    super();
    this.args = args;
    this.pages = {};
  }

  setupPages(initial, pageScheme) {
    this.key = initial;
    this.pages = pageScheme;
  }

  renderPage(key) {
    this.clearDom();
    this.key = key;
    this.render();
  }

  render() {
    if (this.pages) {
      const SideBar = new _sidebar();
      return (Div(this.pages[this.key].renderWithChildren()));
    }
    return (Div());
  }
}

class _row extends Component {
  constructor(args) {
    super();
    console.log(args);
    this.args = args;
  }

  render() {
    return (Div({
      children: this.args.children,
      style: Styles.Row,
    })
    );
  }
}


export const Pages = () => (new _Page());
export const SideBar = () => (new _sidebar());
export const Row = args => (new _row(args));
