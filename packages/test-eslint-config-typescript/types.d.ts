// Test extension rule

declare module 'myModule' {
  interface MyInterface {
    a: string;
    readonly b: string;
  }

  interface MyReadonlyInterface {
    readonly a: string;
    readonly b: string;
  }

  class MyClass {
    public readonly myProperty = 25;
  }
}
