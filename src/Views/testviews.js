import { Component, p, h1,  Div, Button } from '../../lib';

const Styles = {
  MainDiv: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1
  },
  Row: {
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid',
    flexDirection: 'row',
    flex: 1,
  },
  DivOne: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    paddingBottom: '1%',
    flex: 1
  },
  FullHeight: {
    height: '100%',
    flex: 1
  }
}

class Page extends Component {
  constructor(args) {
    super();
    this.args = args;
    this.pages = {}
  }
  setupPages(pageScheme) {
    this.pages = pageScheme;
  }
}
class SideBar extends Component {
  constructor(args) {
    super();
    this.args = args;
  }


  renderButtons(list) {
    let children = []
    list.forEach((value) => {
      children.push((new Button({value: value.title})))
    })
    this.children = children;
  }


  render() {
    return (new new Div({
        children: this.children,
        style: Styles.FullHeight
      }))
  }
}
class ButtonView extends Component {
  constructor(args) {
    super();
    this.args = args;
  }
  render() {
      const { valueOne, valueTwo} = this.args;
      const ButtonValue= new Button();
      const TextValue = new h1();

      TextValue.setValue(valueOne);
      ButtonValue.onClick(()=> {
        if(TextValue._getDom().innerText === valueOne) {
          TextValue.setValue(valueTwo);
        }
        else {
          TextValue.setValue(valueOne);
        }
      });

      return (new Div({
          children: [TextValue, ButtonValue],
          style: Styles.DivOne
        })
      );
  }
}

class Row extends Component {
  constructor(args) {
    super();
    this.args = args;
  }
  render() {
    return (new Div({
        children: this.args,
        style: Styles.Row
      })
    );
  }
}

export default class Main extends Component {
  constructor() {
    super();
  }
  render() {
    const view = {
      button1: (new ButtonView({valueOne: 'whatup', valueTwo: 'no way'})),
      button2: (new ButtonView({valueOne: 'hey man', valueTwo: 'whatup'})),
      text: ((new p()).setValue('hello'))
    }
    console.log(view);
    return (new Div({
        children: [
          (new Row([view.button1, view.button2, view.button1, view.button2])),
          (new Row([view.button1, view.button2])),
          (new Row([view.button1, view.button2, view.button2,])),
          (new Row([view.button1, view.button2, view.button2,])),
          (new Row([view.button1, view.button2, view.button2,])),
          (new Row([view.button1, view.button2, view.button2,])),
          (new Row([(new Div({
            children: [view.text],
            style: {
              flex: 1
            }
          }))]))
        ],
        style: Styles.MainDiv
      })
    );
  }
}
