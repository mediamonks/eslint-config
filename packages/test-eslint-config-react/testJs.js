import { useCallback, useEffect, useMemo, useRef } from 'react';

// eslint-disable-next-line no-console
console.log('test-eslint-config-react');

// eslint-disable-next-line no-empty-function
const noop = () => {};

function useRafCallback(callback) {
  const rafRef = useRef(0);

  return useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(callback);
  }, [callback]);
}

function useResizeObserver(target, callback) {
  const resizeObserver = useMemo(() => new ResizeObserver(callback), [callback]);

  useEffect(() => {
    const element = target.current;
    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, [resizeObserver, target]);

  useEffect(() => () => resizeObserver.disconnect, [resizeObserver]);

  return resizeObserver;
}

// eslint-disable-next-line no-unused-vars
function MyComponent() {
  useResizeObserver({}, useRafCallback(noop));

  useResizeObserver(
    {},
    // eslint-disable-next-line @mediamonks/react/throttle-use-resize-observer-callback
    noop,
  );

  return null;
}
