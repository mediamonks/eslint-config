/* eslint-disable @typescript-eslint/no-unused-vars */
import { MyClass, type MyReadonlyInterface, type MyInterface } from 'myModule';

const myClassInstance = new MyClass();

const myArray1: Array<boolean> = [true, false, true, true, false];
const myArray2: ReadonlyArray<boolean> = [true, false, true, true, false];

interface Interface extends MyInterface {
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

enum HttpCode {
  Ok = 200,
  Teapot = 418,
}

const defaultCode: HttpCode = 200;

class MyLocalClass {
  public readonly readonlyCode: HttpCode = 418;
  public code: HttpCode = defaultCode;

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

function functionWithParameter(value: MyInterface): string {
  return value.a + value.b;
}

function twoDashProperty(): boolean {
  const myObject = {
    '--my-property': true,
  }

  return myObject['--my-property'];
}