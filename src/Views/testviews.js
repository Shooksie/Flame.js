import { Component, Text, Div, Button } from '../../lib';

export default class TestView extends Component {
  constructor() {
    super();
  }
  render() {
    const DivOne = new Div();
    const DivTwo = new Div();
    const MainDiv = new Div();
    DivOne.loadcss({
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    })
    MainDiv.loadcss({
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    })

    const ButtonClick = new Button();
    const Button2 = new Button();

    const TextValue = new Text();
    const TextValue1 = new Text();

    TextValue.setValue('hey');
    ButtonClick.onClick(()=> {
      if(TextValue._getDom().innerText === 'whats up') {
        TextValue.setValue('hey');
      }
      else {
        TextValue.setValue('whats up');
      }
    });

    TextValue1.setValue('oh yeah');
    Button2.onClick(()=> {
      if(TextValue1._getDom().innerText === 'oh yeah') {
        TextValue1.setValue('daym');
      }
      else {
        TextValue1.setValue('oh yeah');
      }
    });

    DivOne.setChild(TextValue);
    DivOne.setChild(ButtonClick)

    DivTwo.setChild(TextValue1);
    DivTwo.setChild(Button2);

    MainDiv.setChild(DivOne);
    MainDiv.setChild(DivTwo);
    return MainDiv;
  }
}
