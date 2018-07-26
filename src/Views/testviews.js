import { Component, Text, Div, Button } from '../../lib';

const Styles = {
  MainDiv: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  DivOne: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
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
      const TextValue = new Text();

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

export default class Main extends Component {
  constructor() {
    super();
  }
  render() {
    const ButtonView1 = new ButtonView({valueOne: 'whatup', valueTwo: 'no way'});
    const ButtonView2 = new ButtonView({valueOne: 'hey man', valueTwo: 'whatup'});
    return (new Div({
        children: [
          ButtonView1, ButtonView2
        ],
        style: Styles.MainDiv
      })
    );
  }
}
