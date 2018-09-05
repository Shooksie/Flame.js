
let exports = {}
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

const select = selector => document.querySelector(selector)

export class Flame {
  constructor(selector, child) {
    this.virtual_dom = {};
    console.log(selector, child);
    this.entryPoint(selector);
    if (child) {
      this.addChild(child);
    }
  }

  entryPoint(selector) {
    this.virtual_dom.parent = select(selector);
    const { parent } = this.virtual_dom;
    parent.style.cssText = 'display: flex; height: 100%;';
    select('body').style.cssText = 'display: flex; height: 100vh;';
  }

  addChild(Child) {
    // function that adds a child into the virtual_dom
    // each child will have access to its own component/page dom
    // this.virtual_dom[child.key] = child.render();
    const { parent } = this.virtual_dom;
    const child = new Child();
    console.log(child);
    child.renderWithChildren();
    parent.appendChild(child.getDom());
  }
}

export const flame = (selector, child) => new Flame(selector, child);
