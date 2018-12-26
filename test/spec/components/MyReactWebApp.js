'use strict';

describe('MyReactWebApp', () => {
  let React = require('react/addons');
  let MyReactWebApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MyReactWebApp = require('components/MyReactWebApp.js');
    component = React.createElement(MyReactWebApp);
  });

  it('should create a new instance of MyReactWebApp', () => {
    expect(component).toBeDefined();
  });
});
