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