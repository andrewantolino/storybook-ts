import * as React from 'React';

export interface DemoProps {
  name: string;
  age: string;
}

export const App = (props: DemoProps) => (
  <h1>Hello {props.name}! You are {props.age} years old!</h1>
);