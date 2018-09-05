import {
  Component,
  p,
  h1,
  Div,
  Button,
  Row,
} from '../../lib';

const Styles = {
  MainDiv: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
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
    flex: 1,
  },
  FullHeight: {
    height: '100%',
    flex: 1,
  },
};


class ButtonView extends Component {
  constructor(args) {
    super();
    this.args = args;
  }

  render() {
    const { valueOne, valueTwo } = this.args;
    const ButtonValue = Button();
    const TextValue = h1();
    TextValue.setValue(valueOne);
    ButtonValue.onClick(() => {
      if (TextValue._getDom().innerText === valueOne) {
        TextValue.setValue(valueTwo);
      } else {
        TextValue.setValue(valueOne);
      }
    });

    return (Div({
      children: [TextValue, ButtonValue],
      style: Styles.DivOne,
    })
    );
  }
}


export default class Main extends Component {
  render() {
    const view = {
      button1: (new ButtonView({ valueOne: 'whatup', valueTwo: 'no way' })),
      button2: (new ButtonView({ valueOne: 'hey man', valueTwo: 'whatup' })),
    };
    return (Div({
      children: [
        (Row({
          children: [view.button1, view.button2, view.button1, view.button2],
        })),
        (Row({
          children: [view.button1, view.button2],
        })),
        (Row({
          children: [view.button1, view.button2, view.button1],
        })),
      ],
      style: Styles.MainDiv,
    })
    );
  }
}
