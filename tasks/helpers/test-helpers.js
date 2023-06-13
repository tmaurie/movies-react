import 'angular-mocks';

let MockFactory = {
  define(name, content) {
    try {
      Object.defineProperty(this, name, {
        get() {
          return content();
        }
      }, {configurable: true});
    } catch (e) {
      throw new Error(`${name}: ${e.message}`);
    }
  }
};

// eslint-disable-next-line angular/window-service
let {inject, module} = window.angular.mock;

export {
  MockFactory,
  inject,
  module
};
