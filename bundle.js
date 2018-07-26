"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Base = function () {
  function Base(type, obj) {
    _classCallCheck(this, Base);

    this._dom = document.createElement(type);
    if (obj) {
      this.children = obj.children ? obj.children : [];
      if (obj.style) {
        this.style = obj.style;
      }
    } else {
      this.children = [];
    }
  }

  _createClass(Base, [{
    key: "_loadefault",
    value: function _loadefault() {
      return;
    }
  }, {
    key: "loadcss",
    value: function loadcss(css) {
      for (var key in css) {
        this._dom.style[key] = css[key];
      }
      return this;
    }
  }, {
    key: "_setState",
    value: function _setState(state) {
      this.state = state;
    }
  }, {
    key: "_getDom",
    value: function _getDom() {
      return this._dom;
    }
  }, {
    key: "setChild",
    value: function setChild(child) {
      this.children.push(child);
      return this;
    }
  }, {
    key: "renderWithChildren",
    value: function renderWithChildren() {
      var fragment = document.createDocumentFragment();
      fragment.appendChild(this._dom);
      this.loadcss(this.style);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          if (child) {
            this._dom.appendChild(child.renderWithChildren());
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return fragment;
    }
  }]);

  return Base;
}();

;

var Div = exports.Div = function (_Base) {
  _inherits(Div, _Base);

  function Div(obj) {
    _classCallCheck(this, Div);

    var type = "div";

    var _this = _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).call(this, type, obj));

    _this._dom.style.cssText = 'flex: 1';
    return _this;
  }

  return Div;
}(Base);

;

var Text = exports.Text = function (_Base2) {
  _inherits(Text, _Base2);

  function Text(obj) {
    _classCallCheck(this, Text);

    var type = "p";
    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, type, obj));
  }

  _createClass(Text, [{
    key: "setValue",
    value: function setValue(value) {
      this._dom.innerText = value;
    }
  }]);

  return Text;
}(Base);

;

var Table = exports.Table = function (_Base3) {
  _inherits(Table, _Base3);

  function Table(obj) {
    _classCallCheck(this, Table);

    var type = "table";
    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, type, obj));
  }

  _createClass(Table, [{
    key: "createHeader",
    value: function createHeader() {
      return;
    }
  }]);

  return Table;
}(Base);

;

var TableHeader = exports.TableHeader = function (_Base4) {
  _inherits(TableHeader, _Base4);

  function TableHeader(obj) {
    _classCallCheck(this, TableHeader);

    var type = "th";
    return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).call(this, type, obj));
  }

  _createClass(TableHeader, [{
    key: "createHeader",
    value: function createHeader() {
      return;
    }
  }]);

  return TableHeader;
}(Base);

;

var TableCell = exports.TableCell = function (_Base5) {
  _inherits(TableCell, _Base5);

  function TableCell(obj) {
    _classCallCheck(this, TableCell);

    var type = "td";
    return _possibleConstructorReturn(this, (TableCell.__proto__ || Object.getPrototypeOf(TableCell)).call(this, type, obj));
  }

  _createClass(TableCell, [{
    key: "createHeader",
    value: function createHeader() {
      return;
    }
  }]);

  return TableCell;
}(Base);

;

var TableRow = exports.TableRow = function (_Base6) {
  _inherits(TableRow, _Base6);

  function TableRow(obj) {
    _classCallCheck(this, TableRow);

    var type = "tr";
    return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, type, obj));
  }

  return TableRow;
}(Base);

;

var Button = exports.Button = function (_Base7) {
  _inherits(Button, _Base7);

  function Button(obj) {
    _classCallCheck(this, Button);

    var type = "button";

    var _this7 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, type, obj));

    var style = {
      flex: '1',
      backgroundColor: 'grey',
      alignSelf: 'center',
      border: '0px',
      paddingTop: '10px',
      paddingBottom: '10px',
      width: '25%',
      margin: '1%',
      boxSizing: 'border-box',
      display: 'inline-block'
    };
    _this7.loadcss(style);
    if (obj && obj.value) {
      _this7._dom.innerHTML = obj.value;
    } else {
      _this7._dom.innerHTML = 'Click me';
    }
    return _this7;
  }

  _createClass(Button, [{
    key: "onClick",
    value: function onClick(handler) {
      this._dom.onclick = handler;
    }
  }]);

  return Button;
}(Base);

;

var Component = exports.Component = function () {
  function Component() {
    _classCallCheck(this, Component);

    this._dom = document.createDocumentFragment();
  }

  _createClass(Component, [{
    key: "getDom",
    value: function getDom() {
      return this._dom;
    }
  }, {
    key: "renderWithChildren",
    value: function renderWithChildren() {
      var obj = this.render();
      this._dom.appendChild(obj.renderWithChildren());
      return this._dom;
    }
  }, {
    key: "render",
    value: function render() {
      return this._dom;
    }
  }]);

  return Component;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _exports = {};
// we will use specfic keys to pre-define specfic html elements
// | key | type      | html equivelent         | attirbutes                      |
// | div | container | <div></div>             | all current html params         |
// | text| text      | any text html equivelent| a type param and all text params|
// |     |           |                         |
// Note: pages by nature will render in a row fashion they will be tweakable to
// render children in a side by side fashion
//
// class myCustomComponent extends component {
//
//     triggerState() {
//       this.store.number += 1;
//     }
//     setup() {
//       this.store.number = 0;
//     }
//     renderComponent() {
//       let textV = Text(this.store.number);
//       let children = [
//         {
//           type: 'div',
//           class: 'card rounded'
//           children: [
//
//           ]
//         }
//       ]
//       return children
//     }
// }
// class pageX extends Page {
//    key='#pageKey'
//    template='html template'
//    renderPage() {
//         let header = new myHeaderComponent()
//         let myComponent = new myCustomComponent()
//         let myComponent2 = new mySecondComponent()
//         let Button = new myCustomButton({
//           onClick: myComponent.triggerState,
//         })
//         return([header,myComponent,myComponent2,Button]);
//    }
// }
//
// const flameInstace = new flame('#startingpoint')
//                          .addChild(pageX)
//                          .addChild(pageY)
//                          .enableSideNav() <- function will be used to create
//                          .enableTopNav()                    the side nav

var flame = exports.flame = function () {
  function flame(selector, child) {
    _classCallCheck(this, flame);

    this.virtual_dom = {};
    this.entryPoint(selector);
    if (child) {
      this.addChild(child);
    }
  }

  _createClass(flame, [{
    key: "entryPoint",
    value: function entryPoint(selector) {
      this.virtual_dom.parent = select(selector);
      var parent = this.virtual_dom.parent;

      parent.style.cssText = "display: flex; background-color: red, width: 100; height: 100%;";
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      // function that adds a child into the virtual_dom
      // each child will have access to its own component/page dom
      // this.virtual_dom[child.key] = child.render();
      var parent = this.virtual_dom.parent;

      child = new child();
      child.renderWithChildren();
      parent.appendChild(child.getDom());
    }
  }]);

  return flame;
}();

var select = function select(selector) {
  return document.querySelector(selector);
};
'use strict';

var _lib = require('../lib');

var _testviews = require('./Views/testviews');

var _testviews2 = _interopRequireDefault(_testviews);

require('./styles.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function component() {
  return new _lib.flame('body', _testviews2.default);
}

var element = component(); // Store the element to re-render on print.js changes
if (module.hot) {
  module.hot.accept('../lib', function () {
    document.body.innerHTML = "";
    element = component(); // Re-render the "component" to update the click handler
  });
}
