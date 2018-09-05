# flame.js
A Javascript Framework for rapid web apps.
flame.js is a component based javascript framework that uses a fragmentation model. It handles all dom insertions using a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment). 

What makes flame.js different is we don't want to replace the dom, but we want to empower you as the developer to gain better control of the dom. This is achieved because every Component you create has a direct pointer to itself in the dom. 

***

### To Install In your JavaScript App

```npm i -s flame.js```

***

### How to use in your app

in a js file of your choice
```javascript
// es6 example

import {
  Component,
  p,
  h1,
  Div,
  Button,
  Row,
} from 'flame';

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

```

I am using webpack to bundle my code up, but feel free to choose any alternatives, such as babel etc

_index.js file_
```javascript
import { flame } from 'flame';
import Main from './{your file path here}';


function component() {
  // create an instance of flame, pass in the html selector you want flame to render on
  // in my case I picked the body because I'm rendering a completely blank html file with webpack
  // but if you want to create a default template and want flame to manage a small section you can
  
  return flame('body',Main));
}

```

*** 

### To use this library you can use webpack in devlopment to precompile your entry file
refer to [webpack getting started](https://webpack.js.org/guides/getting-started/)
  
