import { flame } from '../lib';
import TestView from './Views/testviews';
import './styles.css';


function component() {
  var element = document.createElement('div');
  var spark = new flame('body').addChild(new TestView());
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
   module.hot.accept('../lib', function() {
     console.log('Accepting the updated printMe module!');
     document.body.removeChild(element);
     element = component(); // Re-render the "component" to update the click handler
     document.body.appendChild(element);
   })
 }
