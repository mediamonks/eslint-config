/* eslint-disable no-unused-expressions, no-unused-vars */

const [_first, _second, third] = [];
const { _foo, _bar, baz } = {
  _foo: 'foo',
  _bar: 'bar',
  baz: 'baz',
};

// eslint-disable-next-line no-underscore-dangle
const _qux = '_qux';
const qux = 'qux';

class MyClass {
  // eslint-disable-next-line no-underscore-dangle
  _variable = 'foo';
  #variable = 'bar';

  constructor() {
    // eslint-disable-next-line no-underscore-dangle
    this._variable;
    this.#variable;

    // eslint-disable-next-line no-underscore-dangle
    this._privateMethod();
    this.#privateMethod();
  }

  // eslint-disable-next-line no-underscore-dangle
  _privateMethod() {
    this.#variable = Math.random();
  }

  #privateMethod() {
    this.#variable = Math.random();
  }
}
