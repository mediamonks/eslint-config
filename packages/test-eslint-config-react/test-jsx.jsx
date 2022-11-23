import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';

// eslint-disable-next-line no-console
console.log('test-eslint-config-react');

const collection = ['item1', 'item2', 'item3', 'item4'];

export function TestEslintConfig({ heading, paragraph, buttonLabel }) {
  const [myState, setMyState] = useState(false);

  const myMemo = useMemo(() => !myState, [myState]);

  const onClick = useCallback(() => {
    setMyState(true);
  }, []);

  return (
    <div>
      <h1>{heading}</h1>

      {myMemo && <p>{paragraph}</p>}

      <ul>
        {collection.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button onClick={onClick} type="submit">
        {buttonLabel}
      </button>
    </div>
  );
}

TestEslintConfig.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
};
