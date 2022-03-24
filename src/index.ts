import Binder from './binder.js';

window.onerror = function (msg: any) {
  alert(msg.replace('Uncaught Error: ', ''));
  return true;
};

new Binder();
