/* eslint-disable @typescript-eslint/no-unused-vars, max-classes-per-file */

// eslint-disable-next-line no-console
console.log('test-eslint-config-typescript');

const myArray1: Array<boolean> = [true, false, true, true, false];
const myArray2: ReadonlyArray<boolean> = [true, false, true, true, false];

interface Interface {
  myProperty: Readonly<[number, number]>;
}

interface Type {
  myProperty: string | boolean;
}

abstract class MyAbstractClass {
  protected constructor(protected readonly message: string) {}

  public method(): string {
    return this.message;
  }
}

class MyClass {
  public constructor(private readonly message: string) {}

  public method(): string {
    return this.message;
  }
}

const minMessageLength = 3;

function sayCheese(_?: string, message?: string): string | undefined {
  if (message === undefined || message.length < minMessageLength) {
    return;
  }

  return `Cheese ${message}`;
}

sayCheese(undefined, 'Sandwich');
