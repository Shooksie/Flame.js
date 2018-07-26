import { flame } from '../lib';
import Main from './Views/testviews';


function component() {
  return (new flame('body',Main));
}

let element = component(); // Store the element to re-render on print.js changes
if (module.hot) {
   module.hot.accept('../lib', function() {
     document.body.innerHTML = ""
     element = component(); // Re-render the "component" to update the click handler
   })
 }
