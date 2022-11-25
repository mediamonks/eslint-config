import { type ReactElement } from 'react';

// eslint-disable-next-line no-console
console.log('test-eslint-config-typescript-react');

const collection = ['item1', 'item2', 'item3', 'item4'];

type TestEslintConfigProps = Readonly<{
  icon?: string;
  buttonLabel?: string;
  title?: string;
}>;

export function TestEslintConfig({
  title,
  icon,
  buttonLabel,
}: TestEslintConfigProps): ReactElement {
  return (
    <div>
      <h1>{title}</h1>

      <ul>
        {collection.map((item) => (
          <li data-icon={icon} key={item}>
            {item}
          </li>
        ))}
      </ul>

      {buttonLabel !== undefined && <button type="button">{buttonLabel}</button>}
    </div>
  );
}

export const instance = (
  <TestEslintConfig
    buttonLabel="Click me"
    icon="a-very-long-icon-name"
    title="A very long title that causes the props on this instance to wrap to multiple lines"
  />
);

export function getStaticProps(): TestEslintConfigProps {
  return {};
}
