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
    flex: 1,
  },
  SideBarStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  SideBarChild: {
    height: '50px',
    width: '100%',
  },
  PageStyle: {
    flex: 5,
    display: 'flex',
  },
  Row: {
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid',
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
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

class SideBar extends Component {
  constructor(params) {
    super();
    this.params = params;
  }

  render() {
    return (Div({ style: Styles.SideBarStyle, children: this.params.sidebarlist }));
  }
}

class PageManager extends Component {
  constructor(params) {
    super();
    this.params = params;
    this.curPage = params.nav[params.navList[1].pageID].elm;
  }

  changePage(pageID) {
    this.curPage = this.params.nav[pageID].elm;
    console.log(this.curPage);
    this.invokeReRender();
  }

  renderSideBarButton() {
    const { navList } = this.params;
    const array = [];

    navList.forEach((item) => {
      const arrayElm = Button({ value: item.title, style: Styles.SideBarChild });
      arrayElm.onClick(() => {
        console.log(item.pageID);
        this.changePage(item.pageID);
      });
      console.log(arrayElm);
      array.push(arrayElm);
    });
    console.log('logging the array');
    console.log(array);
    return array;
  }

  render() {
    console.log('got to PageManager render');
    const sidebar = new SideBar({ sidebarlist: this.renderSideBarButton() });

    return (Row({
      children: [sidebar, Div({ children: [this.curPage], style: Styles.PageStyle })],
    }));
  }
}


export default class Main extends Component {
  render() {
    const mainPages = new PageManager({
      navList: [
        { title: 'Home', pageID: 'home' },
        { title: 'About Us', pageID: 'aboutUs' },
      ],
      nav: {
        home: {
          elm: (Div({ style: { flex: 1, backgroundColor: 'black' } })),
        },
        aboutUs: {
          elm: (Div({ style: { flex: 1, backgroundColor: 'red' } })),
        },
      },
    });
    return (Div({ children: [mainPages], style: Styles.MainDiv }));
  }
}
